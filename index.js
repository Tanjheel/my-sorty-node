const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello from personal sorty!!")
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '0198734555' },
    { id: 2, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '0198734555' },
    { id: 3, name: 'sabaefea', email: 'sabefeana@gmail.com', phone: '0198734555' },
    { id: 4, name: 'sabaeewna', email: 'saefebana@gmail.com', phone: '0198734555' },
    { id: 5, name: 'sabewfeana', email: 'sabfewana@gmail.com', phone: '0198734555' },
    { id: 6, name: 'saefebana', email: 'sabfefana@gmail.com', phone: '0198734555' },
    { id: 7, name: 'sabfefana', email: 'sabaefna@gmail.com', phone: '0198734555' },

]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else { res.send(users); }

})

app.get('/user/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana']);
});

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour sour fazli flavour');
});

app.listen(port, () => {
    console.log('Listening to port', port)
});