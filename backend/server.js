const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const flashcardSetRoutes = express.Router();
const PORT = 4000;

let FlashcardSet = require('./flashcardSet.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://AD410_User:dbPassword@dex-cluster-o3nrm.mongodb.net/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

flashcardSetRoutes.route('/').get(function(req, res) {
    FlashcardSet.find(function(err, flashcardSet) {
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
        }
    });
});

flashcardSetRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    FlashcardSet.findById(id, function(err, flashcardSet) {
        res.json(flashcardSet);
    });
});

flashcardSetRoutes.route('/update/:id').post(function(req, res) {
    FlashcardSet.findById(req.params.id, function(err, flashcardSet) {
        if (!flashcardSet)
            res.status(404).send("data is not found (server.js:41)");
        else
            flashcardSet.flashcardSet_title = req.body.flashcardSet_title;
            flashcardSet.flashcardSet_author = req.body.flashcardSet_author;
            flashcardSet.flashcardSet_description = req.body.flashcardSet_description;
            flashcardSet.flashcardSet_category = req.body.flashcardset_category;

            flashcardSet.save().then(flashcardSet => {
                res.json('FlashcardSet updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

flashcardSetRoutes.route('/add').post(function(req, res) {
    let flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
        .then(flashcardSet => {
            res.status(200).json({'flashcardSet': 'flashcardSet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flashcardSet failed');
        });
});
/*
//Search function
//Use MongoDB in operator to query data
//flashcardSetRoutes.route('/search/:search').post(function(req, res){
flashcardSetRoutes.route('/search').get(function(req, res){
    //let search = req.params.searchValue;
    
    //FlashcardSet.find({searchValue, function(err,flashcardSet){
      FlashcardSet.find({flashcardSet_title: "Math", function(err,flashcardSet){  
        if(err) {
            console.log("401 - unable to retrieve search result");
        }else{
            res.json(result);
        }
    }})
        
});
*/
    


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});