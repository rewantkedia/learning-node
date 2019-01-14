const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //creating a schema for the table

//below is the schema for the user table
const userSchema = new Schema({
    name:{
        type:String,
        required: [true,'Name required']
    },
    age:{
        type:Number
    }
});

const User = mongoose.model('user',userSchema);  //creating the table with the schema defined above
//the name of the collection in db is saved as 'users' not user.
module.exports = User; //The table (collection) is exported.