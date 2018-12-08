# GraphQL Docker Workshop

This repository contains the GraphQL workshop of the module ESD at Fontys University of Applied Sciences.

## Authors

* **Ajeet Sandu** - [GitHub Profile](https://github.com/ajsann)
* **Patrick Richter** - [GitHub Profile](https://github.com/ajsann)

See also the list of [contributors](https://github.com/sebivenlo/GraphQL/graphs/contributors) who participated in this project.

## Getting Started

Please clone the project to a folder. 

CD into the project :

    cd graphQL/
    
Build Dockerfile to create image: 

    docker build -t graphQL-API .
    
Build Dockerfile to create image: 

    docker build -t graphql-api .    
    
Run the Build Docker image:     

    docker run -d -p 4000:4000 graphql-api
    
Open the GraphQL API:

[localhost:4000](http://localhost:4000)
    
    
