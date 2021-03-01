var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

var async = require('async');
var fs = require('fs');
var pg = require('pg');

var user = process.env.user;
var host = process.env.host;
var database = process.env.database;
var port = process.env.port;


var cloud = process.env.cloud;
var cluster = process.env.cluster;
var deployment = process.env.deployment;

console.log(user, host, database, port);

console.log(cloud, cluster, deployment);

var config = {
    user: user,
    host: host,
    database: database,
    port: port
};

// Create a pool.
var pool = new pg.Pool(config);


// Parsear o conteudo
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  	extended: true
}));


// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});



// GET
app.get('/',function(req,res){
	var data = {
		"msg" : "Bem-vindo a sua primeira aplicação multi-cloud multi-cluster",
		"api" : "song-api",
		"cloud":cloud,
		"cluster":cluster,
		"deployment":deployment
	};
	res.json(data);
	console.log(data);
});




app.get('/load',function(req,res){

	pool.connect(function (err, client, done) {

	    // Close communication with the database and exit.
	    var finish = function () {
	        done();
	        // process.exit();
	    };

	    if (err) {
	        console.error('could not connect to cockroachdb', err);
	        finish();
	    }
	    async.waterfall([
	            
	            function (next) {
	                // Create the 'accounts' table.
	                client.query('CREATE TABLE files.song ( id SERIAL PRIMARY KEY, SONGNAME TEXT NOT NULL, AUTHORNAME TEXT NOT NULL, PRICE REAL);', next);
	            	// client.query('select * from books.book', next);
	            },
	            function (results, next) {
	                // Print out account balances.
	                client.query("INSERT INTO files.song ( SONGNAME, AUTHORNAME, PRICE) VALUES ('SongJones', 'Jonathan', 35000.00);", next);
	            },

	        ],
	        function (err, results) {
	            if (err) {
	                console.error('Error inserting into and selecting from accounts: ', err);
	                finish();
	            }

	            console.log('Database loaded:');
	            
	            res.json(results);
    			// console.log(results);
	            finish();
	        });
	});


});







// GET /book
app.get('/song',function(req,res){
	

	pool.connect(function (err, client, done) {

   		if (err) {
	        console.error('could not connect to cockroachdb', err);
	        done();
	    } else {

	    	var data = {
				"error":1,
				"Songs":"",
				"Total":""
			};

	    	client.query('SELECT * from files.song', (err, res2) => {
				if (err) {
			    	console.log(err.stack)
			 	} else {
			    	
			    	console.log(res2.rows[0])

			    	data["error"] = 0;
					data["Songs"] = res2.rows;
					data["Total"] = res2.length;		
					res.json(data);
					done();

			  	}
			})
	    }
	});
});

// ===================================


// POST /book
app.post('/song',function(req,res){

	var Songname = req.body.songname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;

	var data = {
		"error":1,
		"Songs":""
	};

	if(!!Songname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Songs":"",
					"Total":""
				};

		    	client.query("INSERT INTO files.song ( SONGNAME, AUTHORNAME, PRICE) VALUES ('"+Songname+"', '"+Authorname+"', "+Price+");", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Songs"] = "Erro adicionando música";
					}else{
						data["error"] = 0;
						data["Songs"] = "Música adicionada com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Songs"] = "Por favor, informe todos os dados : (songname, authorname, price)";
		res.json(data);
	}
});

// ===================================

// PUT /book
app.put('/song',function(req,res){
	var Id = req.body.id;
	var Songname = req.body.songname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Songs":""
	};
	if(!!Id && !!Songname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Songs":"",
					"Total":""
				};

		    	client.query("UPDATE files.song SET SONGNAME='"+Songname+"',AUTHORNAME='"+Authorname+"', PRICE="+Price+"  WHERE ID = "+Id+";", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Songs"] = "Erro atualizando musica";
					}else{
						data["error"] = 0;
						data["Songs"] = "Musica atualizada com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});




	}else{
		data["Songs"] = "Por favor, informe todos os dados:  (id, songname, authorname, price )";
		res.json(data);
		console.log(data);
	}
});

// ===================================

// DELETE /book
app.delete('/song',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"Songs":""
	};
	if(!!Id){
		
		

		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Songs":"",
					"Total":""
				};

				// DELETE FROM books.book WHERE ID = 2;

		    	client.query("DELETE FROM files.song WHERE ID ="+Id, (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Songs"] = "Erro deletando musica";
					}else{
						data["error"] = 0;
						data["Songs"] = "Musica deletada com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Songs"] = "Por favor, informe todos os dados: ( id )  ";
		res.json(data);
		console.log(data);
	}
});

app.listen(8000,function(){
	console.log("song-api online 8000");
});
