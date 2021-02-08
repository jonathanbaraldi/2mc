var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

var async = require('async');
var fs = require('fs');
var pg = require('pg');

// Connect to the "bank" database.

//  process.env.REDIS_PORT_6379_TCP_ADDR

var user = process.env.user;
var host = process.env.host;
var database = process.env.database;
var port = process.env.port;

console.log(user, host, database, port);


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
		"Data":""
	};
	data["Data"] = "Welcome to Jon's API";
	res.json(data);
	console.log(data);
});


// GET 
app.get('/html',function(req,res){
	
	var data = {
		"Data":""
	};
	
	data["Data"] = "API de Serviços do Jon";
	data["Ver"] = "0.2";

	var body = '<html>'
				+'	<head>'
				+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
				+'	</head>'

				+'	<body>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	</body>'
				+'	</html>';

	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(body);
	res.end();
});







/*

drop table books.book;
CREATE DATABASE books;
CREATE TABLE books.book ( id MEDIUMINT NOT NULL AUTO_INCREMENT, BookName VARCHAR(100), AuthorName VARCHAR(100), Price VARCHAR(10), PRIMARY KEY (id)); 

SELECT * FROM books.book;

INSERT INTO books.book VALUES (1,"My first autoscalling app","YourName","69");

*/


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
	                client.query('CREATE TABLE books.book ( id SERIAL PRIMARY KEY, BOOKNAME TEXT NOT NULL, AUTHORNAME TEXT NOT NULL, PRICE REAL);', next);
	            	// client.query('select * from books.book', next);
	            },
	            function (results, next) {
	                // Print out account balances.
	                client.query("INSERT INTO books.book ( BOOKNAME, AUTHORNAME, PRICE) VALUES ('BookJones', 'Jonathan', 85000.00);", next);
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
    			/*
	            results.rows.forEach(function (row) {
	                console.log(row);
	            });
	            */

	            finish();
	        });
	});


});





















// GET /book
app.get('/book',function(req,res){
	

	pool.connect(function (err, client, done) {

   		if (err) {
	        console.error('could not connect to cockroachdb', err);
	        done();
	    } else {

	    	var data = {
				"error":1,
				"Books":"",
				"Total":""
			};

	    	client.query('SELECT * from books.book', (err, res2) => {
				if (err) {
			    	console.log(err.stack)
			 	} else {
			    	
			    	console.log(res2.rows[0])

			    	data["error"] = 0;
					data["Books"] = res2.rows;
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
app.post('/book',function(req,res){

	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;

	var data = {
		"error":1,
		"Books":""
	};

	if(!!Bookname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

		    	client.query("INSERT INTO books.book ( BOOKNAME, AUTHORNAME, PRICE) VALUES ('"+Bookname+"', '"+Authorname+"', "+Price+");", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro adicionando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro adicionado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Books"] = "Por favor, informe todos os dados : (bookname, authorname, price)";
		res.json(data);
	}
});

// ===================================

// PUT /book
app.put('/book',function(req,res){
	var Id = req.body.id;
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id && !!Bookname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

		    	client.query("UPDATE books.book SET BOOKNAME='"+Bookname+"',AUTHORNAME='"+Authorname+"', PRICE="+Price+"  WHERE ID = "+Id+";", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro atualizando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro atualizado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});




	}else{
		data["Books"] = "Por favor, informe todos os dados:  (id, bookname, authorname, price )";
		res.json(data);
		console.log(data);
	}
});

// ===================================

// DELETE /book
app.delete('/book',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id){
		
		

		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

				// DELETE FROM books.book WHERE ID = 2;

		    	client.query("DELETE FROM books.book WHERE ID ="+Id, (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro deletando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro deletado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Books"] = "Por favor, informe todos os dados: ( id )  ";
		res.json(data);
		console.log(data);
	}
});

app.listen(8000,function(){
	console.log("Conectado e escutando na porta 8000");
});
