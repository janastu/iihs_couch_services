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
   
Build the Dockerfile using    

     docker-compose build

Run the Dockerfile using     
    
    docker-compose up
   
Confiure the Couchdb database
   
   1) navigate to domainname of couchdb and select Setup 
   
   2) click on Configure single node type admin username and passwordand click on Configure.
   
   3) Enabling Cors : Click on Configuration and Select Cors and select option as Enable Cors for all domains.After enabling in Main       config make sure in cors section cors is enabled,headers,method and origins are present 
   
   3) Replicate the database if present from localhost else create database called feeds.
   
   4) Restart the couchdb service and make sure sl_users database is created to enable the Superlogin module to work after configuration
   
Test the Superlogin by Postman

   1) Open Postman and make the HTTP Post request to dominname:3000/auth/register 
   
   2) In Authoriazation click on Basic Auth and type username and password of Couchdb Databse and update the preivew request
   
   3)In Body use x-www-form-urlencoded
       
       name:John
       username:johnsmaith
       email:john@gmail.com
       password:john12345
       confirmPassword:john12345
      
   4) Make the post request and response should be "User Created Successfully"
   
   
  Running IIHS Application
  
  Navigate to the domain name and create a user by clicking Registration and then use the credientials and login to the IIHS Applications . 
    
   
   
   
 
 
