const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB
mongoose.connect(require('./config/keys').MongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/user', require('./routes/user'));

console.log(new Date().toDateString());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Server Listen
app.listen(PORT, () => {
    console.log(`Listing at port ${PORT}`);
})