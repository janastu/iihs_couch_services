# iihs_couch_services
Docker Services for IIHS Curation Dashboard

Individual Services should be cloned from the git repositery.

1. IIHS_CURATION_DASHBAORD

iihs_curation_dashboard is for client  application which contains the Web Application and it can be cloned from the [Github url]( https://github.com/janastu/iihs_curation_dashboard)

2.IIHS_CURATION_AUTH

iihs_curation_auth is for supperlogin service which is used for User Registration and Login Purpose  it can be cloned from the [Github Url](https://github.com/janastu/iihs_curation_auth)

3.IIHS_CURATION_FEEDPARSER

iihs_curation_feedparser  contains the Services used to parse feeds from xml link and response back the JSON object , it can be cloned from the [Github url]( https://github.com/janastu/iihs_curation_feedparser)

4.IIHS_CURATION_COUCH

iihs_curation_couch contians the couchdb database for the application and it can be cloned from the [Github url ](https://github.com/janastu/iihs_curation_couch)


# Installation and Configuration

  1) Open Terminal and clone the project https://github.com/janastu/iihs_couch_services

  2) Navigate to iihs_couch_service folder and Clone the individual service in the iihs_couch_service folder using the command 
  
               git clone  https://github.com/janastu/iihs_curation_dashboard
          
               git clone  https://github.com/janastu/iihs_curation_auth
          
               git clone  https://github.com/janastu/iihs_curation_feedparser
           
               git clone  https://github.com/janastu/iihs_curation_couch
          
  
  
## Configure the IIHS_CURATION_COUCH

Configurations to be done in local.ini inside iihs_curation_couch folder 

### Admin Username and Password

    [admins]
    
    ;username=password    // Set the Username and Passowrd in this Section
    
line no 101 and 102 in local.ini

### Enabling Cors in Couch DB

    [cors]
    origins = *                                  // Client URL or * for all origins
    credentials = true
    methods = GET, PUT, POST, HEAD, DELETE
    headers = accept, authorization, content-type, origin, referer, x-csrf-token
    
    
line no 103 and 107 in local.ini
 
 
 ## To build the docker file changes the configurations as follows

a) For local deployment


   1) Change the variables in varaibles.env file present in root directory 
   
           dbprotocol                //like http or https
           dbhost                    //URL of  couch db database : with port number 
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
           dbhost                           //URL of  couch db database with : port number 
           dbPort                           //Couchdb Service Port
           dbuser                           //Couchdb admin username
           dbpassword                       //Cocuhdb admin password
           authHost                         //AuthService URL with : port number 
           authPort                         //AuthService Port
           feedParserhost                   //FeedParser URL with : port number
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
           clienturl                   // Client Doamin name for whitelist in Cors virtual host name 
           authHost                    //AuthService URL
           authPort                   //AuthService Port
           feedParserhost             //FeedParser URL
           feedParserPort             //FeedParser Port
           feeddbname                 //Feeds Database Name
   
   
   2) Change the varibales in /client/src/environments/environment.prod.ts  for client application configurations
      as follows
      
Enter virtual host name in  Dbhost,authost,feedParserhost respectively for Production 


           dbprotocol                      //like http or https
           dbhost                           //URL of  couch db database virtual host name
           dbPort                           //Couchdb Service Port
           dbuser                           //Couchdb admin username
           dbpassword                       //Cocuhdb admin password
           authHost                         //AuthService URL  virtual host name
           authPort                         //AuthService Port
           feedParserhost                   //FeedParser URL     virtual host name
           feedParserPort                   //FeedParser Port
  
  
   
Navigate to the iihs_couch_services in your docker terminal


## Build the Dockerfile using    

     docker-compose build

## Run the Dockerfile using     
    
    docker-compose up
   
   
# Test the Individual Services

Open the IIHS_CURATION_DASHBOARD IP address / Virtual Host Name in browser and test the client application which internally test the other services.

