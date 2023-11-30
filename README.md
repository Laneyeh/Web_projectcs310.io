# Web_projectcs310.io
Web Project for Web Development Class

## Introduction:
Hello! Welcome to my documentation where I talk about my website Code Green! This website was built to be an informative website about the benefits and the positive impact computer science is having towards climate change and other environmental issues while also having images, sources for more information, and a natural-toned aesthetic. Through this website I hope to build more of a positive reputation behind the reasons to go into Computer Science.
## An instruction on importing the Database:
put in the following command to upload the database:
`sqlite3 database.db < schema.sql`

## Setting up the project on a local machine:
1. run the following command to install the following packages into packages.json:
    `npm install express`
    `npm install multer`
    `npm install sqlite`
    `npm install sqlite3`
2. run the following command to start running the project:
    `nodemon server.js`
## API Documentation:
Here are the API's I used for this project:
- Google Fonts
    - used for the fun title and subtitle fonts
    - Request type: GET
    - Request parameters: 'family','display','subset','text'
    - Response type: CSS Format
    - Description: 
        - this request takes the parameter css?family=Agbalumo and css?family=Mulish and returns a CSS response in changing the font to the re.spective types throughout the website.
- SQL
    - used for setting up, managing, and adding into the database.
    - Request Type: GET
    - Request parameters: 'GET', 'POST','PUT'
    - Response Types: JSON format
    - Description:
        - This request takes the image request and response in JSON containing the information and images relating to that topic.