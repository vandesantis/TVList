const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const signup = require('./controllers/signup');
const profile = require('./controllers/profile');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user: 'postgres',
        password : '',
        database : 'newtvshowlist'
    }
});

db.select('*').from('users').then(data => {
    console.log(data);
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(database.users);
})

app.get('/test', (req, res) => {
    res.send('test');
})

app.get('/home', (req, res) => {
    db.select('*').from('shows')
        .then(shows => {
            res.json(shows);
        })
        .catch(err => console.log(err))
})

app.post('/submitshow', (req, res) => {
    const { title, genre, synopsis, fcc } = req.body;
    console.log("title:", title);

    db('shows')
    .insert({
        title: title,
        genre: genre,
        synopsis: synopsis,
        fcc: fcc
    })
    .then(show => {})
    .catch(err => res.status(400).json('unable to add show'));
})

app.post('/signup', (req, res) => { signup.handleSignUp(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => {Image.handleImage(req, res, db)})

app.listen(3000, () => {
    console.log('app is running on port 3000');
});