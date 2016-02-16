// app/models/location.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  place: {type: String, required: true},
  description: {type: String, required: true},
  location: {type: [Number], required: true},  //[Long, Lat]
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

LocationSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

LocationSchema.index({location: '2dsphere'});

// module.exports allows us to pass this to other files when it is called 
//Sets the MongoDB collection to be used as: "Locations"
module.exports = mongoose.model('Location', LocationSchema);