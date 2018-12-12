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

    docker build -t graphql-api .    
    
Run the Build Docker image:     

    docker run -d -p 4000:4000 graphql-api
    
Open the GraphQL API:

   [http://localhost:4000](http://localhost:4000)
    

## Assignments

You are going to perform some GraphQL actions. Please click on the green button which is located on the right side of your window. Now you should see a collection of queries, mutations etc. This is the information windows which allows you to check what the API is offering you. You should use this window during the followig assignments (This will help you). 

### Assignment 1

Please display all users with their name, email and ID

### Assignment 2

Please create a user with your Name, Fontys mail and age.
Tipp: Please note your user ID which you will get back from the database for further assignments

### Assignment 3
Please display again **all** users with their name, email and ID and 
verify that your user is there. 

### Assignment 4
Please display **your** specific user with **your** name, email and ID to
verify that your user is there.

### Assignment 5
Please delete **all** users which are not students at the Fontys.
Tipp: You should the userID to delete an user.

### Assignment 6
Please display again **all** users with their name, email and ID and 
verify that you deleted all not fontys users.

### Assignment 7
Please display the name and **all** posts of the user **Ajeet Sandu**.
Tipp: For this assignment the tipp is **undefined**  :stuck_out_tongue_closed_eyes: 

### Assignment 8
Now, you want to post something. A post has a title and a body. Please write 
something nice (or maybe not so nice). Please create at least **2 posts**.
Tipp: You could create a post with your userID. You will get a true, if everything is ok.

### Assignment 9
Now, check the posts of your account. You should see more now.

### Assignment 10
You reached the end of this workshop. You can play with the GraphQL API and get a feeling of the queries and functions. Thank you for participating.





