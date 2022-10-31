const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;


const app = express();
const DBURI = "Removed from GIT";
mongoose.connect(DBURI);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const categoryRouter = require('./routers/categoryRouter');
const productsRouter = require('./routers/productRouter');


app.use(express.static(path.join(__dirname, '/public/')));


app.use('/products', productsRouter);
app.use('/category',categoryRouter);


app.listen(PORT);
