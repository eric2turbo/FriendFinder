var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // Code to find best match

        // Initialize array to hold comparison results
        var diffCalculate = [];

        for (var i = 0; i < friends.length; i++) {

        }

        // Find the min value of comparison scores
        var min_of_array = Math.min.apply(Math, diffCalculate);
        console.log(diffCalculate);

        // Add current user to friendsArray
        friends.push(req.body);

        // Return best match to client
        res.json(friends[diffCalculate.indexOf(min_of_array)]);
    });
}

function arraySubtract(i) {
    var tempNum;
    for (var j = 0; j < friends[i].scores; j++) {
        tempNum = tempNum + Math.abs(friends[i].scores[j] - req.body.scores[j]);
        console.log(friends[i].name + " diff is " + diffCalculate[i]);
    }
    return tempNum;
}