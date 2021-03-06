const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

require('./routes/emailRoute')(app)

if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets 
    //like our main.js or main.css
    app.use(express.static('client/build'));
    //Express will serve up the index.html file
    //if it doesnt recognize the route
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000

app.listen(PORT);