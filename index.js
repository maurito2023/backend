const express = require("express");
const cors = require('cors');
const routerApi = require('./routes');
const {logErrors, errorHandler} = require('./middlewares/error.handler');
const app = express();
const port = 3000;
const whilelist = ['http://localhost:8080','http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
    origin:(origin, callback) => {
        if (whilelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('ACCESO NO PERMITIDO'));
        }
    }
}


app.use(logErrors);
app.use(errorHandler);
app.use(cors(options));

app.get("/", (req, res)=>{
    res.send("Hola este es mi servidor en express");
});

app.get("/otraRuta", (req, res) =>{
    res.send("Mi otra tienda en expresss");
})

routerApi(app);


app.listen(port, ()=> {
    console.log("My port:" + port);
});

// Get Parametros con Query
// api.example.com/products
// api.example.com/products?page=1
// api.example.com/products?limit=10&offset=0
// api.example.com/products?region=USA
// api.example.com/products?region=USA&brand=XYZ

/*
app.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send ('No hay parametros')
    }
});
*/