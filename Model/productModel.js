const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_name: {
    type: String,
    required: [true, 'Enter Product Name'],
    minLength: 3,
    maxLength: 20,
    },
    price: {
    type: Number,
    required: [true, 'Enter Product Price'],
    min: 1,
    max: 10000,
    },
    featured:{
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: [true, 'Enter Product Description'],
        minLength: 10,
        maxLength: 200,
    },
    ratings:{
        type: Number,
        default: 3.5,
        min: 0,
        max: 5,//max rating allowed
    },
    createdAt:{
        type: Date,
        default: Date.now(),//default
    },
    company_name:{
        type:String,
        enum:{
            values:['Facebook', 'Twitter', 'Google'],
            message: 'Company is either Facebook, Twitter or Google,{VALUE} is not accepted'//error message is sent when the company is not available
        }
        // enum:['Facebook', 'Twitter', 'Google']

    }
});
const product= mongoose.model('product',productSchema);
module.exports=product;
