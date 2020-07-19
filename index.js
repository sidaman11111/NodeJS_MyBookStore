const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// CONFIG PUG TEMPLATE
app.set('view engine', 'pug');
app.set('views', './views');
// END OF CONFIG PUG TEMPLATE

// ROUTE FOR INDEX PAGE
app.get('/', function(requests,response){
      response.render('index');
});
// END OF ROUTE FOR INDEX PAGE  

app.listen(port, () => console.log(`Example app listening PORT ${port}`));