var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
  cityName: String,
  cityCapita: Number,
  cityHistory: String,
  cityCulture: String,
  cityTrivia: String,
  created_at: {type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('City', CitySchema);


//curl -XPOST http://localhost:3000/tests -d 'test=curl test'

/*
**************CURL-METHODS****************

# Create a test using the API
curl -XPOST http://localhost:3000/tests -d
'
testString=Test%Second%Post
&testNumber=9002
&testArray=1,2,3,4
&testBoolean=true
'

# Get todo by ID (use the _id from the previous request, in my case "57eacd028c99f004e0036182")
curl -XGET http://localhost:3000/tests/57eacd028c99f004e0036182

# Get all elements (notice it is an array)
curl -XGET http://localhost:3000/tests

#update
# Use the ID from the todo, in my case 57eacd028c99f004e0036182
curl -XPUT http://localhost:3000/tests/57eacd028c99f004e0036182 -d "testString=updated string"

#delete
# Use the ID from the todo, in my case 57a655997d2241695585ecf8
curl -XDELETE http://localhost:3000/tests/57eac7c4e4216904959d9133



*/
