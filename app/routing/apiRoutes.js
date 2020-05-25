//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friends = require('../data/friends.js');

module.exports = function(app) {

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newFriendScores = req.body.scores;
    var scoresArray= [];
    var bestMatch = 0;

    for (var i = 0; i < friends.length; i ++) {
        var total = 0;

        for (var x = 0; x < newFriendScores.length; x++) {
            total += (Math.abs(parseInt(friends[i].scores[x]) - parseInt(newFriendScores[x])));
        }

        scoresArray.push(total);
    }

    for (var y = 0; y < scoresArray.length; y++) {
        if(scoresArray[y] <= scoresArray[bestMatch]) {
            bestMatch = y;
        }
    }

    var best = friends[bestMatch];
    res.json(best);

    friends.push(req.body);
});
};
