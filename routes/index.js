var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
 
var github = new GitHubApi({});

/* GET home page. */
router.get('/getFollowers/:username', function(req, res) {
	github.users.getFollowingForUser({
	    username: router.params.username
	}, function(err, res) {
	    console.log(JSON.stringify(res));
	});
});

module.exports = router;
