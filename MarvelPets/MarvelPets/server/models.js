const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const MarvelPetSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        // minlength: [3, 'Pet name must be at least 3 characters long.']
    },
    Species: {
        type: String,
        required: true,
        // minlength: [3, 'Pet type must be at least 3 characters long.']
    },
    Affiliations: {
        type: String,
        // minlength: [3, 'Pet description must be at least 3 characters long.']
    },
    Description: {
        required: true,
        type: String
    },
    Image: {
        type: String
    },
}, {timestamps: true});

mongoose.connect(
    'mongodb://localhost:27017/marvelpetsdb',
    { useNewUrlParser: true },
    (errs) => console.log(errs || 'database is working')
);

const MarvelPet = mongoose.model('MarvelPets', MarvelPetSchema);
MarvelPetSchema.plugin(unique, {
    message: "This is Unique."
})

module.exports = {MarvelPet}

