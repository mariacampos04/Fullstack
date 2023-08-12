// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

//setting pets array
const pets = []
// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets)

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    //set ownerName variable 
    const ownerName = req.params.ownerName;
    //filter ownerName 
    const filterPets = pets.filter(ownerName);
    // get the owner from the request
    res.json(filterPets);


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});


// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    //definining petName variable
    const petName = req.params.name;
    //filtered pet names 
    const filterPets = pets.filter(petName);
    // get the name from the request
    res.json(filterPets);



    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});    

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;