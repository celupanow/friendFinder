<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Friend Finder</h3>
<p align="center">
This application allows the user to answer survey questions, which then match them up with information about other users to determine who their closest match is.
<br />
<br />
<a href="https://frozen-brook-49925.herokuapp.com/">View Demo</a>
·
<a href="https://github.com/celupanow/friendFinder/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/friendFinder/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
![Eat-Da-friendFinder](./public/assets/img/eatdafriendFinder-agile-wave.png "Eat-Da-friendFinder")

### Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/friendFinder.git

```
2. Install the NPM packages
```sh
npm install
```
3. Run the application using the command line
```sh
node server.js
```
4. Go to localhost:8080 in your browser

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/friendFinder/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact
Christina Lupanow - christina@christinalupanow.com
<p>
Project Link: [https://frozen-brook-49925.herokuapp.com/](https://frozen-brook-49925.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [Heroku](https://heroku.com)


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/friendFinder.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/friendFinder/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/friendFinder.svg?style=flat-square

[forks-url]: https://github.com/celupanow/friendFinder/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/friendFinder.svg?style=flat-square

[stars-url]: https://github.com/celupanow/friendFinder/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/friendFinder.svg?style=flat-square

[issues-url]: https://github.com/celupanow/friendFinder/issues

[license-shield]: https://img.shields.io/github/license/celupanow/friendFinder.svg?style=flat-square

[license-url]: https://github.com/celupanow/friendFinder/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png


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
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzMzNzQ2ODQ3LC04MTY2NTI2NThdfQ==
-->