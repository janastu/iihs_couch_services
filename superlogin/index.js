 //require('dotenv').config()
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var SuperLogin = require('superlogin');
var cors = require('cors')
//const fs = require('fs')
//const dotenv = require('dotenv')
//const envConfig = dotenv.parse(fs.readFileSync('./variables.env'))



//for (var k in envConfig) {
 // process.env[k] = envConfig[k]
  //console.log(process.env[k]);
//}

//var CONFIG = require('../config.json');
/*
var dbprotocol = CONFIG.dbprotocol;
var dbhost = CONFIG.dbhost;
var dbuser = CONFIG.dbuser;
var dbpassword= CONFIG.dbpassword;
var dbuserDB=CONFIG.dbuserDB;
var dbcouchAuthDB=CONFIG.dbcouchAuthDB;
*/
var dbprotocol = process.env.protocol;
console.log(dbprotocol);
var dbhost = process.env.host;
console.log(dbhost);
var couchdbport=process.env.couchdbport;
var dbhostwidport=dbhost + ':' +couchdbport;

console.log(dbhostwidport); 

var dbuser = process.env.couchdbusername;
var dbpassword= process.env.couchdbpassword;
console.log(dbuser);
console.log(dbpassword);

var port=process.env.superloginport;
var couchdbdomain=dbprotocol + dbhost;

console.log(couchdbdomain);
console.log(port);
var dbuserDB=process.env.dbuserDB;
var dbcouchAuthDB=process.env.dbcouchAuthDB;

var app = express();
app.set('port', process.env.superloginport || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Change the whitelist

//var whitelist = [couchdbdomain]
/*
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/
var corsOptions = {
  "origin": "*",
  "allowedHeaders":['Content-Type', 'Authorization'],
  "methods": ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  "preflightContinue": true,
  "optionsSuccessStatus": 204
  
}
app.options('*',cors())
//app.use(cors())
 /*
app.get('/products/:id',cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
*/ 

var config = {
  dbServer: {
    protocol: dbprotocol,
    host: dbhostwidport,          //Host name for Couchdb Database
    user: dbuser,                    //User name for Couchdb Database
    password: dbpassword,     //Password for Couchdb Database
    userDB:'sl-users',
    couchAuthDB:'_users'
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
app.use('/auth', superlogin.router, cors(corsOptions));
 
http.createServer(app).listen(app.get('port'));

/*app.get('/auth',cors(corsOptions), function (req, res, next) {
  next();
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})*/