//dependencies
var express = require("express");
var path = require("path");

// var apiRoutes = require('./app/routing/apiRoutes.js');
// var htmlRoutes = require('./app/routing/htmlRoutes.js');


//setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static("public"));

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(htmlRoutes);
// app.use(apiRoutes);

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  
