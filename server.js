const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Replace `<password>` with your actual password
const mongodb_url = 'mongodb+srv://jncheg:joannalee@cluster1.katgoki.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster1';

// Connecting to the database
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Error connecting to database:', err));
// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 5005;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});