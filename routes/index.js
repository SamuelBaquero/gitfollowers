var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
 
var github = new GitHubApi({});
/* URL DE MONGO */
var url = "mongodb://localhost:27017/labAI";

function getStared(callback){
	mongodb.connect(url, (err, db) => {
		if(err) throw err;

		var stars = db.collection("stars");

		stars.find({}).toArray((err2, stars) => {
			if(err2) throw err2;

			callback(stars);
		});
	});
}

router.post('/star', function(req, res){
	mongodb.connect(url, (err, db) => {
		if(err) throw err;

		var stars = db.collection("stars");
		stars.find({
			username:req.body.username
		}).toArray((err, res2)=>{
			var vstars = (res2.stars)? res2.stars + 1:1;
			return(res2.stars)?
				stars.update(
					{username:req.params.username},
					{ $set: {vstars}}
				):
				stars.insertOne({
				  username: username,
				  stars: 1
				}).then(function(result) {
				  return result
				})
		});
	});	
});

/* GET home page. */
router.get('/followers/:username', function(req, res) {
	github.users.getFollowersForUser({
	    username: req.params.username
	}, function(err, res2) {
	    res.json(res2);
	});
});

router.get('/stared', function(req, res){
	getMaze((stars)=>{
		res.json(stars);
	});
});

module.exports = router;
