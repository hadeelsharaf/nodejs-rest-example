const mongoose = require("mongoose");
const { Schema } = mongoose;

const productModel = new Schema({
    'name': { type: String },
    'price': { type: Number },
    'quantity': { type: Number },
    'category_id': { type: Number },
    'code': { type: Number },
    'image': { type: String }
});


module.exports = mongoose.model('product',productModel,'product');