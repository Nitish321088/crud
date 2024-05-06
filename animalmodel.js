const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/animal');

const animalSchema = mongoose.Schema(
    {
        name: String,
        specises: String,
        age: String,
    }
)

mongoose.model("animal", animalSchema);
