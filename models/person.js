const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
    },
    wife: {
        type: ObjectId,
        ref: 'Person'
    },
    husband: {
        type: ObjectId,
        ref: 'Person'
    },
    father: {
        type: ObjectId,
        ref: 'Person'
    },
    mother: {
        type: ObjectId,
        ref: 'Person'
    },
    children: [
        {
            type: ObjectId,
            ref: 'Person'
        }
    ]

})

const Person = mongoose.model("Person", personSchema)
module.exports = Person