const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@cluster.g58hq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    password:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);


module.exports = Signupdata;
