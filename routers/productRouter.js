const express = require('express');
const mongoose = require('mongoose');
//const db = mongoose.connect('mongodb+srv://nodejsapp:NWjr7aaG7baEod9A@cluster0.mhvwws3.mongodb.net/?retryWrites=true&w=majority');
const Product = require('../models/productModel');



const productsRouter = express.Router();

productsRouter.route('/')
    .post((req, res) => {
        const product = new Product(req.body);
        product.save();
        return res.status(201).json(product);
    })
    .get((req, res) => {
        let query = {};
        const category_id= req.query.category_id;
        if (category_id)
            query = {"category_id":category_id}
        Product.find(query,(err, products) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.status(200).json(products);
        });
    });

productsRouter.route('/:id')
    .put((req, res) => { 
        const id = req.params.id;
        const query = { "id": id };
        Product.findOne(query, (err, product) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            product.name = req.body.name;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
            //console.log(product);
            product.save(); 
            return res.status(200).json(product);
        });

    })
    .get((req, res) => {
        const id = req.params.id;
        const query = { "id": id };
        Product.findOne(query, (err, product) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.status(200).json(product);
        });
    });

module.exports = productsRouter;
