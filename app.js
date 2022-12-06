const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const routeArticle = require('./routers/article');


mongoose.connect("mongodb://127.0.0.1:27017/api_rest",
{
    useNewUrlParser: true
}).then(()=>{
    console.log('Vous etes bien Connecter!!!')
}).catch(()=>{
    console.log('Connection erroner!!!')
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', handlebars.engine({ extname: 'hbs', articleDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs');
//Postman
// app.use('/api/articles', routeArticle);
app.use('/article', routeArticle);
module.exports=app;