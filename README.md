# iihs_couch_services
Docker Services for IIHS Curation Dashboard


Client  contains the Web Application

Super Login  contains the Superlogin service which is used for User Registration and Login Purpose


Installation and Configuration

  1) Open Terminal and clone the project https://github.com/janastu/iihs_couch_services

  2) To build the docker file changes the configurations as follows

a) For local deployment


   1) Change the variables in varaibles.env file present in root directory 
   
           dbprotocol    //like http or https
           dbhost        //ipadresss with port number of couch db database like 192.168.99.100:5984
           dbuser         //Couchdb admin username                  
           dbpassword     //Cocuhdb admin password
           domainname      // Doamin name for whitelist in Cors its same lik 192.168.99.100 
           superloginurl     // URl with port number for superlogin service like http://192.168.99.100:3000
           feedParserServiceUrl // URL with port number for feedParser service like http://192.168.99.100:3500
 
  
   
   
   2) Change the varibales in /client/src/environments/environment.ts  for client application configurations
      as follows
      
          username:  //Couchdb admin username 
          password:  //Cocuhdb admin password
          host:      //ipadresss with port number of couch db database like 192.168.99.100:5984
          superLoginServerUrl: // URl with port number for superlogin service like http://192.168.99.100:3000
          feedParserServiceUrl: // URL with port number for feedParser service like http://192.168.99.100:3500
 
 
 
b) For Production deployment

 1) Change the variables in varaibles.env file present in root directory 
   
        dbprotocol    //like http or https
        dbhost        //ipadresss with port number of couch db database like 192.168.99.100:5984  
        dbuser         //Couchdb admin username                  
        dbpassword     //Cocuhdb admin password
        domainname      // Doamin name for whitelist in Cors its same lik 192.168.99.100 
        superloginurl     // URl with port number for superlogin service like http://192.168.99.100:3000
        feedParserServiceUrl // URL with port number for feedParser service like http://192.168.99.100:3500
 
   
   
   2) Change the varibales in /client/src/environments/environment.prod.ts  for client application configurations
      as follows
      
     username:  //Couchdb admin username 
     password:  //Cocuhdb admin password
     host:      //ipadresss with port number of couch db database like 192.168.99.100:5984
     superLoginServerUrl: // URl with port number for superlogin service like http://192.168.99.100:3000
     feedParserServiceUrl: // URL with port number for feedParser service like http://192.168.99.100:3500
  
   
   
Navigate to the iihs_couch_services in your terminal


Build the Dockerfile using    

     docker-compose build

Run the Dockerfile using     
    
    docker-compose up
   
Confiure the Couchdb database
   
   1) navigate to dbhost with port number (192.168.99.100:5984/_utils) of couchdb and select Setup 
   
   2) click on Configure single node type admin username and password for db which will be used in couch db admin username and password and click on Configure.
   
   3) Verify the installation by clicking on verify and then verify installation button 
   
   4) Enabling Cors : Click on Configuration and Select Cors and select option as Enable Cors for all domains.After enabling in Main       config make sure in cors section cors is enabled,headers,method and origins are present 
   
   5) Make sure sl_users database is created to enable the Superlogin module to work after configuration
   
Test the Superlogin Services using Postman

   1) Open Postman and make the HTTP Post request to dbhost with port number with /auth/register like 192.168.99.100:3000/auth/register 
   
   2) In Authoriazation click on Basic Auth and type username and password of Couchdb Databse and update the preview request
   
   3)In Body use x-www-form-urlencoded
       
       name:John
       username:johnsmaith
       email:john@gmail.com
       password:john12345
       confirmPassword:john12345
      
   4) Make the post request and response should be "User Created Successfully"
   
   
 
 Running IIHS Application
  
  Navigate to the domain name and create a user by clicking Registration and then use the credientials and login to the IIHS  Applications . 

    
   
   
   
 
 
