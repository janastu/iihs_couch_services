 //require('dotenv').config()
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var SuperLogin = require('superlogin');

const fs = require('fs')
const dotenv = require('dotenv')
const envConfig = dotenv.parse(fs.readFileSync('./variables.env'))

for (var k in envConfig) {
  process.env[k] = envConfig[k]
  //console.log(process.env[k]);
}

//var CONFIG = require('../config.json');
/*
var dbprotocol = CONFIG.dbprotocol;
var dbhost = CONFIG.dbhost;
var dbuser = CONFIG.dbuser;
var dbpassword= CONFIG.dbpassword;
var dbuserDB=CONFIG.dbuserDB;
var dbcouchAuthDB=CONFIG.dbcouchAuthDB;
*/
var dbprotocol = process.env.dbprotocol;
var dbhost = process.env.dbhost;
var dbuser = process.env.dbuser;
var dbpassword= process.env.dbpassword;
var dbuserDB=process.env.dbuserDB;
var dbcouchAuthDB=process.env.dbcouchAuthDB;

console.log(dbhost);


var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var config = {
  dbServer: {
    protocol: dbprotocol,
    host: dbhost, //Host name for Couchdb Database
    user: dbuser,                    //User name for Couchdb Database
    password: dbpassword,     //Password for Couchdb Database
    userDB:dbuserDB,
    couchAuthDB: dbcouchAuthDB
  },
  mailer: {
    fromEmail: 'gmail.user@gmail.com',
    options: {
      service: 'Gmail',
        auth: {
          user: 'gmail.user@gmail.com',
          pass: 'userpass'
        }
    }
  },
  userDBs: {
    defaultDBs: {
      private: ['supertest']
    }
  }
}
 
// Initialize SuperLogin 
var superlogin = new SuperLogin(config);
 
// Mount SuperLogin's routes to our app 
app.use('/auth', superlogin.router);
 
http.createServer(app).listen(app.get('port'));
