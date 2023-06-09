const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userName:{
        type: String,
        required: true, 
        unique: true, 
        trim : true , 
    },

},{
    timestamps: true, 

});
// eslint-disable-next-line no-undef
const User = mongoose.model('User', userSchema);
module.exports = User;