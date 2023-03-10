const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    } ,
    tel: {
        type: Number, 
    },
    profil: {
        type: String, 
    },
    matricule: {
        type: String, 
    },
    email: { {timestamps: true},
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    etat: {
        type: Boolean,
    },
    dateinscrit: {
        type: String,
    },
   }, 
  
{
    collection: 'books'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema)