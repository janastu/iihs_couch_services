# iihs_couch_services
Docker Services for IIHS Curation Dashboard


Client  contains the Web Application

Super Login  contains the Superlogin service which is used for User Registration and Login Purpose


Installation and Configuration

  1) Open Terminal and clone the project https://github.com/janastu/iihs_couch_services

  2) To build the docker file changes the configurations as follows

a) For local deployment


   1) Change username,password,host in varaibles.env file present in /superlogin  for superlogin configurations 
   
   
   2) Change theusername,password,host,superloginurl in /client/src/environments/environment.ts  for client application configurations
 
b) For Production deployment


   1) Change username,password,host in varaibles.env file present in /superlogin  for superlogin configurations 
   
   
   2) Change theusername,password,host,superloginurl in /client/src/environments/environment.ts  for client application configurations
 
 
