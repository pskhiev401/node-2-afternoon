require('dotenv').config()

const express = require('express'),
app = express(),
{json}= require('body-parser'),
massive = require('massive'),
port = process.env.PORT || 3000,
{create, getAll, getOne, update, deleted} = require('./products_controller');
    
app.use(json());
massive (process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db);
    db.init()
}).catch(err=>console.log(err));


app.post('/api/product', create);
app.get( '/api/products', getAll);
app.get('/api/product/:id', getOne);
app.put('/api/product/:id', update);
app.delete('/api/product/:id', deleted);



app.listen( port, () => {console.log(`Server listening @ port ${port}`); } );