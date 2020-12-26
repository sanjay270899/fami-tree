// Packages
const express = require('express')
const router = express.Router()

// Own
const User = require('../models/user')
const Person = require('../models/person')
const { populate } = require('../models/person')

// Routing

router.patch('/add-person/:id', (req, res) => {

    const id = req.params.id;
    const { name, gender, DOB, wife, husband, father, mother, children } = req.body;

    const person = new Person({
        name,
        gender,
        DOB,
        wife,
        husband,
        father,
        mother,
        children
    })

    person.save()
        .then((savedPerson) => {
            User.findByIdAndUpdate(id, { $push: { "treeData": savedPerson._id } }, { new: true }, function (err, model) {
                if (err) {
                    return res.status(422).json({ error: "Error occured!" });
                }
                return res.json({ message: "Updated!", updatedUser: model });
            })
        })
        .catch(err => console.log(err))

})

router.get('/all-users', (req, res) => {
    User.find().then((list) => {
        return res.json(list);
    }).catch(err => console.log(err));
})

module.exports = router