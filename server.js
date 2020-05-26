//dependencies
var express = require("express");
var path = require("path");

//setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//pulling info from the routing files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//opening the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  
