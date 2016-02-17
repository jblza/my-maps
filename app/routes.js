 // app/routes.js

 var mongoose = require('mongoose');

// grab the location model we just created
var Location = require('./models/location.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/locations', function(req, res) {
            // use mongoose to get all locations in the database
            var query = Location.find({});
            query.exec(function(err, locations){
            if(err) {res.send(err);}

            // If no errors are found, it responds with a JSON of all locations
            res.json(locations);
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/locations', function(req, res){
          var newLocation = new Location(req.body);

          // New User is saved in the db.
          newLocation.save(function(err){
            if(err) {res.send(err);}

            // If no errors are found, it responds with a JSON of the new location
            res.json(req.body);
          });
        });

        // route to handle delete goes here (app.delete)
        app.delete('/locations', function (req, res) {
          Location.find(function(err, locations) {
            if (err) {console.error(error);}
            //<---------- delete location to database
          });
        });

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };
