const express = require('express');

const app = express();

/* app.use((req, res, next) => {
    //middleware
    //console.log(req.headers);
    //console.log(req.method); 
    console.log(req.url);
    next()
});
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Hello...</h1>");
});

app.get('/user', (req, res) => {
    const user = {
        name: 'jhon',
        hobby: 'skating'
    }
    res.send(user);
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Success');
});


/* app.get('/:id', (req, res) => {
    console.log(req.query)
    console.log(req.body)
    console.log(req.headers)
    console.log(req.params)

    res.status(404).send("<h1>Hello...</h1>");
});
 */


app.listen(3000);
