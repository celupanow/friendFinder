//requiring the path package
var path = require('path');

//a function to export the routes
module.exports = function (app) {
  //a GET route that displays the home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })
  //a GET route that displays the survey
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
