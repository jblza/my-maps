 // app/routes.js

// grab the location model we just created
var Location = require('./models/location.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/locations', function(req, res) {
            // use mongoose to get all nerds in the database
            Location.find(function(err, locations) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(locations); // return all locations in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/locations', function(req, res){
          Location.find(function(err, locations) {
            if (err) {console.error(error);}
            //<---------- add new location to database
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
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
