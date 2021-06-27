const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogschema = new Schema({
    link:{
        type:String,
        required: true
    },
    img:{
        type:String,
    },
    heading:{
        type:String,
    },
    content:{
        type:String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
});

module.exports = mongoose.model('Blogs', blogschema);