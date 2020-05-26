
//requiring the data from the friends array
var friends = require('../data/friends.js');

//a function that lets us export the api route info
module.exports = function (app) {

    //a GET route that displays the JSON of the friends array
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //a POST route that takes in the survey results
    app.post("/api/friends", function (req, res) {
        //a variable that holds the scores from the survey
        var newFriendScores = req.body.scores;
        //an empty array to hold the differences
        var scoresArray = [];
        //a variable to hold the best match
        var bestMatch = 0;

        //a for loop that runs through the friends array
        for (var i = 0; i < friends.length; i++) {
            //a variable to hold the total difference
            var total = 0;
            //a for loop that runs through the scores array
            for (var x = 0; x < newFriendScores.length; x++) {
                //subtracting the user score from the friend score, making it positive, and adding it to the total
                total += (Math.abs(parseInt(friends[i].scores[x]) - parseInt(newFriendScores[x])));
            }
            //pushing the total to the empty array
            scoresArray.push(total);
        }
        //a for loop that runs through the scores array and compares the difference to determine the best match
        for (var y = 0; y < scoresArray.length; y++) {
            if (scoresArray[y] <= scoresArray[bestMatch]) {
                bestMatch = y;
            }
        }
        //a variable to hold the best match
        var best = friends[bestMatch];
        //returning the best match
        res.json(best);
        //pushing the new results to the friends array
        friends.push(req.body);
    });
};
