var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: String,
  userSteps: Number,
  belongsToGroup: String,
  created_at: {type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);

//curl -XPOST http://localhost:3000/users -d 'test=curl test'

/*
**************CURL-METHODS****************

# Create a user using the API
curl -XPOST http://localhost:3000/users -d'userName=Risto%Paananen&userSteps=45&belongsToGroup=ICT14-M'

# Get todo by ID (use the _id from the previous request, in my case "57eb6ee7b6c27b06a1e26207")
curl -XGET http://localhost:3000/users/57eb6ee7b6c27b06a1e26207

# Get all elements (notice it is an array)
curl -XGET http://localhost:3000/users

#update
# Use the ID from the todo, in my case 57eb6ee7b6c27b06a1e26207
curl -XPUT http://localhost:3000/users/57eb6ee7b6c27b06a1e26207 -d "userSteps+=10"

#delete
# Use the ID from the todo, in my case 57eb6ee7b6c27b06a1e26207
curl -XDELETE http://localhost:3000/users/57eb6ee7b6c27b06a1e26207



*/
