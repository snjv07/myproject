const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const login = require('./routes/logins');
const users = require('./routes/users');
const customers = require('./routes/customers');

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivatekey is not defined.');
    process.exit(1);
}
mongoose.connect('mongodb://localhost/project')
 .then(() => console.log('Connection Established'))
 .catch(err => console.error('Not Connected', err)); 


app.use(express.json());
app.use('/api/login', login);
app.use('/api/users', users);
app.use('/api/customers', customers);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}..`));