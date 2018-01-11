# iihs_couch_services
Docker Services for IIHS Curation Dashboard


Client Folder contains the Web Application

Super Login Folder contains the Superlogin service which is used for User Registration and Login Purpose


Installation and Configuration

  1) Open Terminal and clone the project https://github.com/janastu/iihs_couch_services

  2) To build the docker file changes the variables as follows

a) For local testing


   1) Change username ,password,host in varaibles.env file present in superlogin folder for superlogin configurations 
   
   
   2) Change theusername,password,host,superloginurl in client/src/environments/environment.ts in Client folder for client application configurations
 
b) For Production deployment


   1) Change username ,password,host in varaibles.env file present in superlogin folder for superlogin configurations 
   
   
   2) Change theusername,password,host,superloginurl in client/src/environments/environment.prod.ts in Client folder for client application configurations
  
 
 
