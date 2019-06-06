const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user: 'postgres',
        password : '',
        database : 'newtvshowlist'
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.send('test');
})

app.get('/homelist', (req, res) => {
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

app.listen(3000, () => {
    console.log('app is running on port 3000');
});