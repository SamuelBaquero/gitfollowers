var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
 
var github = new GitHubApi({});

/* GET home page. */
router.get('/followers/:username', function(req, res) {
	github.users.getFollowersForUser({
	    username: req.params.username
	}, function(err, res2) {
		console.log(res2);
	    res.json(res2);
	});
});

router.get('/users/:username/subscriptions', function(req, res){
	github.activity.getWatchedReposForUser({
	    username: req.params.username
	}, function(err, res2) {
		console.log(res2);
	    res.json(res2);
	});
});

module.exports = router;
