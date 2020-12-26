// Packages
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

// Own
const User = require('../models/user')
const { JWTKey } = require('../config/keys')

// User
router.post('/register', (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please fill all fields" })
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "This email is already registered" })
            }

            bcrypt.hash(password, 12)
                .then(hashed => {
                    const user = new User({
                        name,
                        email,
                        password: hashed,
                        treeData: []
                    })

                    user.save()
                        .then(() => res.json({ message: "User Created" }))
                        .catch(err => console.log(err))
                })
        })
        .catch(err => console.log(err))
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all fields" })
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(isMatched => {
                    if (isMatched) {
                        const token = jwt.sign({ _id: savedUser._id }, JWTKey)
                        const { _id, name, email, treeData } = savedUser
                        res.json({ token, user: { _id, name, email, treeData }, message: "Successfully logged in" }) // { token : token }
                    } else {
                        return res.status(422).json({ error: "Invalid Email or Password" })
                    }
                })
                .catch(err => console.log(err))
        }).catch(err => console.log(err))
})

module.exports = router