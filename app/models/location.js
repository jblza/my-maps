// app/models/location.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Location', {
    name : {type : String, default: ''}  //<--- need to edit to create appropriate fields for the data 
});