# friendFinder
This application allows the user to answer survey questions, which then match them up with information about other users to determine who their closest match is.

Working Link
[Deployed on Heroku](https://frozen-brook-49925.herokuapp.com/)

## Objectives

 - Display a basic home page.
 - Have a survey page where the user inputs their name, photo link, and answers several questions.
 - Have an API link to display the data that has been put in.
 - Compare the user's answers to the data to determine who is their best match.
 - Display their best match with a modal.
 
## How It Works
This application has a server.js file to run the server and uses Node.js and Express. Using GET and POST routes, it displays the home page, links to the survey page, receives the data from the user, and displays all the data to the API. When the user reaches the home page, they click the button to take the survey. They must put in their name, photo link, and answer all the questions. Missing one of these will display an alert prompting the user to go back and fill out every question. When they hit submit, if all the questions are answered, the app will take their information, compare it to the information already there for other friends, and determine the best match. This will then be displayed on a modal. Clicking the API link will display a JSON of all the friends. 

## Technologies

 - HTML
 - CSS
 - jQuery
 - JavaScript
 - Node.js
 - Express
 - 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NjM5MDQ2OTldfQ==
-->