# friendFinder
This application allows the user to answer survey questions, which then match them up with information about other users to determine who their closest match is.

Working Link
[Deployed on Heroku](https://frozen-brook-49925.herokuapp.com/)

## Objectives

 - Display a row of buttons that will search the Giphy API.
 - Display the first ten gifs returned by the Giphy API.
 - Allow the user to click each gif to start and stop them.
 - Allow the user to input their own search term and add the button to the page.
 - Display the rating of each gif.
 
## How It Works
When the page loads, it runs a function that displays several buttons that are created from an array of pre-existing search terms and an input field with a submit button. When the user clicks on one of the existing search buttons, a function will run that first uses an AJAX call to the Giphy API to return the first ten gifs and then displays the static version of those gifs and their rating to the DOM. When the user clicks on any of these gifs, a function will run that checks the data state of the gif. If the data state is still, it will animate the gif. If the data state is animate, it will still the gif. If the user types something into the input box and then hits the submit button, their input gets pushed to the original array and the function that displays buttons runs again to repopulate all of the buttons, including the new addition from the user. The user must then click the new button to display the gifs relating to their search term.

## Technologies

 - HTML
 - CSS
 - jQuery
 - JavaScript
 - AJAX
 - Giphy API
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxMjM0MzI0NzhdfQ==
-->