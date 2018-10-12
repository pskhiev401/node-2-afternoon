require("dotenv").config();
// REQUIRE DEPENDENCIES

const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
// DECLARE PORT
// const port = 3001;
let port = process.env.PORT || 3001;
const {create,getAll,getOne,update,deleted} = require("./controllers/productsController");

const app = express()
app.use(json())

//massive connects to heroku
massive(process.env.CONNECTION_STRING)
.then(db => {
app.set("db", db);
    // db.init()
    // we piggy-backed off massive's CONNECTION_STRING event to heroku, and we created a table via the invocation init.sql file
})
.catch(error => console.log(error));

app.post("/api/product", create);

app.get("/api/products", getAll);
app.get("/api/product/:id", getOne);
app.put("/api/product/:id", update);
app.delete("/api/product/:id", deleted);

app.listen(port, () => {
console.log(`Server listening @ port ${port}`);
});
