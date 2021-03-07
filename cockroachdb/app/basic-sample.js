var async = require('async');
var fs = require('fs');
var pg = require('pg');

var config = {
    user: 'root',
    host: '10.142.0.35',
    database: 'books',
    port: 26257
};


var pool = new pg.Pool(config);


pool.connect(function (err, client, done) {

    var finish = function () {
        done();
        process.exit();
    };

    if (err) {
        console.error('could not connect to cockroachdb', err);
        finish();
    }
    

    async.waterfall([
            function (next) {
                
                client.query('CREATE TABLE IF NOT EXISTS accounts (id INT PRIMARY KEY, balance INT);', next);
            },
            function (results, next) {
                
                client.query('INSERT INTO accounts (id, balance) VALUES (6, 2000), (7, 350);', next);
            },
            function (results, next) {
            
                client.query('SELECT id, balance FROM accounts;', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from accounts: ', err);
                finish();
            }

            console.log('Initial balances:');
            results.rows.forEach(function (row) {
                console.log(row);
            });

            finish();
        });
});