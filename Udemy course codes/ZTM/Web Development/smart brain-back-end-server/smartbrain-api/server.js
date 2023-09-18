const express = require('express');
const cors = require('cors');
//const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors());
const database = {
    users: [
        {
            id: '123',
            name: 'jhon',
            email: 'jhon@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database);
})

app.post('/signin', (req, res) => {
    /*     bcrypt.compare("pass", "$2a$10$qPq2DwRIrSkUyg3bWKelUOfyUU.K.nhr0rw/sPC7blrlrqLrMHZNO", function (err, res) {
            // res === true
            console.log('first guess ' + res)
        });
        bcrypt.compare("not_bacon", '$2a$10$qPq2DwRIrSkUyg3bWKelUOfyUU.K.nhr0rw/sPC7blrlrqLrMHZNO', function (err, res) {
            // res === false
            console.log('second guess ' + res)
        }); */
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.json('error cant log in');
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    /*     bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                // Store hash in your password DB.
                console.log(hash);
            });
        }); */

    database.users.push(
        {
            id: '125',
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
        })
    res.json(database.users[database.users.length - 1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

app.listen(3000);


















