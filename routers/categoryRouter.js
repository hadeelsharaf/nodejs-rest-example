const express = require('express');
const mongoose = require('mongoose');

const Category = require('../models/categoryModel');
const categoryRouter = express.Router();

categoryRouter.route('/')
    .get((req, res) => {
        Category.find((err, results) => {
            if (err) {
                console.error(err);
                return res.send(err);
            }
            return res.status(200).json(results);
        });
    });

categoryRouter.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        const query = { 'id': id };
        Category.find(query, (err, results) => {
            if (err) {
                console.error(err);
                return res.send(err);
            }
            return res.status(200).json(results);
        });
    });

module.exports = categoryRouter;
