const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const host = '0.0.0.0';
const port = process.env.PORT || 5000;

//app.engine();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));




app.get('/notes' , function(req, res){
    // res.render('index', function(err, html) {
    //     if(err) {console.log('error')}
    //     res.send('index.html');
    //   });


    res.sendFile(path.join(__dirname, "notes.html"));
})

app.post('/notes' , function(req, res){
    // res.render('index', function(err, html) {
    //     if(err) {console.log('error')}
    //     res.send('index.html');
    //   });
    var note = fs.readFileSync(db.json);
    var parsedNote= parseJSON(note);
    res.sendFile(path.join(__dirname, "notes.html"),note);
})

app.delete('/notes/:id' , function(req, res){
    // res.render('index', function(err, html) {
    //     if(err) {console.log('error')}
    //     res.send('index.html');
    //   });
    res.sendFile(path.join(__dirname, "notes.html"));
})

app.get('/' , function(req, res){
    // res.render('index', function(err, html) {
    //     if(err) {console.log('error')}
    //     res.send('index.html');
    //   });
    res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(port, function(){
    console.log("server listening on port " + port);
})