var express = require('express');
var router = express.Router();
const got = require('got');
const url = require('url');

/* GET bikes listing. */
router.get('/', function(req, res, next) {
  
  let get_params = url.parse(req.url, true).query;

  if (Object.keys(get_params).length == 0) {
    got('http://localhost:3031/classA/bikes/all').then(result => {
      res.send(result.body);
    }).catch(error => {
      res.status(500).send('Server is not up!');
    });

    got('http://localhost:3031/classA/bikes/team').then(result => {
        res.send(result.body);
    }).catch(error => {
        res.status(500).send('Server is not up!');
    });
  }
  else {
    let key = Object.keys(get_params)[0];
    if (key !== 'location') {
      res.status(404).send('Only look up location!');
    }
    let value = req.query[key];
    console.log(value);
    got('http://localhost:3031/classA/bikes/all/' + value).then(result => {
      res.send(result.body);
    }).catch(error => {
      res.status(500).send('Invalid location!');
    });
  }
});


module.exports = router;
