const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// CONFIG PUG TEMPLATE
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
// END OF CONFIG PUG TEMPLATE

// ROUTE FOR INDEX PAGE
app.get('/', function(requests,response){
    response.render('index');
});
// END OF ROUTE FOR INDEX PAGE  

// ROUTE FOR TESTING MONGODB
const testRouter = require(__dirname + '/api/routers/TestData.router');
app.get('/testdata', testRouter);
// END OF ROUTE FOR INDEX PAGE  

app.listen(port, () => console.log(`Example app listening PORT ${port}`));