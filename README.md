# iihs_couch_services
Docker Services for IIHS Curation Dashboard

Individual Services should be cloned from the git repositery.

iihs_curation_dashboard is for client  application which contains the Web Application and it can be cloned from the url https://github.com/janastu/iihs_curation_dashboard


iihs_curation_auth is for supperlogin service which is used for User Registration and Login Purpose  it can be cloned from the url 

https://github.com/janastu/iihs_curation_auth

iihs_curation_feedparser  contains the Services used to parse feeds from xml files and it can be cloned from the url  https://github.com/janastu/iihs_curation_feedparser

iihs_curation_couch contians the couchdb database for the application and it can be cloned from the url https://github.com/janastu/iihs_curation_couch


Installation and Configuration

  1) Open Terminal and clone the project https://github.com/janastu/iihs_couch_services

  2) Navigate to iihs_couch_service folder and Clone the individual service in the iihs_couch_service folder using the command 
  
               git clone  https://github.com/janastu/iihs_curation_dashboard
          
               git clone  https://github.com/janastu/iihs_curation_auth
          
               git clone  https://github.com/janastu/iihs_curation_feedparser
           
               git clone  https://github.com/janastu/iihs_curation_couch
          
  
  
  Set the admin username and password for couchdb in local.ini files of the iihs_curation_couch  in admin section as below before building docker file
  
             [admins]
             <username>=<password>
 
 To build the docker file changes the configurations as follows

a) For local deployment


   1) Change the variables in varaibles.env file present in root directory 
   
           dbprotocol                //like http or https
           dbhost                    //URL of  couch db database 
           dbPort                    //Couchdb Service Port
           dbuser                    //Couchdb admin username                  
           dbpassword                 //Cocuhdb admin password
           dbuserDB                   //Database name for authservice
           dbcouchAuthD                //Database name for authservice authorization
           clienturl                   // Client Doamin name for whitelist in Cors  
           authHost                    //AuthService URL
           authPort                   //AuthService Port
           feedParserhost             //FeedParser URL
           feedParserPort             //FeedParser Port
           feeddbname                 //Feeds Database Name
          
 
  
   
   
   2) Change the varibales in /client/src/environments/environment.ts  for client application configurations
      as follows
      
           dbprotocol                      //like http or https
           dbhost                           //URL of  couch db database 
           dbPort                           //Couchdb Service Port
           dbuser                           //Couchdb admin username
           dbpassword                       //Cocuhdb admin password
           authHost                         //AuthService URL
           authPort                         //AuthService Port
           feedParserhost                   //FeedParser URL
           feedParserPort                   //FeedParser Port

 
 
b) For Production deployment

 1) Change the variables in varaibles.env file present in root directory 
   
           dbprotocol                //like http or https
           dbhost                    //URL of  couch db database 
           dbPort                    //Couchdb Service Port
           dbuser                    //Couchdb admin username                  
           dbpassword                 //Cocuhdb admin password
           dbuserDB                   //Database name for authservice
           dbcouchAuthD                //Database name for authservice authorization
           clienturl                   // Client Doamin name for whitelist in Cors  
           authHost                    //AuthService URL
           authPort                   //AuthService Port
           feedParserhost             //FeedParser URL
           feedParserPort             //FeedParser Port
           feeddbname                 //Feeds Database Name
   
   
   2) Change the varibales in /client/src/environments/environment.prod.ts  for client application configurations
      as follows
      
Enter virtual host name in  Dbhost,authost,feedParserhost respectively for Production 


           dbprotocol                      //like http or https
           dbhost                           //URL of  couch db database 
           dbPort                           //Couchdb Service Port
           dbuser                           //Couchdb admin username
           dbpassword                       //Cocuhdb admin password
           authHost                         //AuthService URL
           authPort                         //AuthService Port
           feedParserhost                   //FeedParser URL
           feedParserPort                   //FeedParser Port
  
   
   
Navigate to the iihs_couch_services in your docker terminal


Build the Dockerfile using    

     docker-compose build

Run the Dockerfile using     
    
    docker-compose up
   
   

Test the Superlogin Services using Postman (https://www.getpostman.com/)

   1) Open Postman and make the HTTP Post request to authservice with port number with /auth/register in the url like authurl:port/auth/register 
   
   2) In Authoriazation click on Basic Auth and type username and password of Couchdb Databse and update the preview request
   
   3) In Body use x-www-form-urlencoded
       
       name:John
       username:johnsmaith
       email:john@gmail.com
       password:john12345
       confirmPassword:john12345
      
   4) Make the post request, if the response is "User Created Successfully" then the Superlogin service is configured with Couchdb Database
   
   
 
 Running IIHS Application
  
  Navigate to the domain name and create a user by clicking Registration and then use the credientials and login to the IIHS  Applications . 

    
   
   
   
 
 
