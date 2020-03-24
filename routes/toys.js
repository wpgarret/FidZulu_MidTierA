const express = require('express');
var router = express.Router();
const got = require('got');
const url = require('url');


router.get('/team/', function (req, res, next) {
    console.log("get team")
    // let params = url.parse(req.url,true).slashes;
    got('http://localhost:3033/toys/team').then(result => {
        res.send(result.body);
    }).catch(error => {
        res.status(500).send('No results found');
    });
});
router.get('/all/:location', function (req, res, next) {
    console.log("get http://localhost:3033/toys/all/" +req.params.location)
    // let params = url.parse(req.url,true).slashes;
    got('http://localhost:3033/toys/all/'+req.params.location).then(result => {
        res.send(result.body);
    }).catch(error => {
        res.status(500).send('No results found for location');
    });
});
module.exports = router;