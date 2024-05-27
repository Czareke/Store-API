const AppError=require('../Utils/appError');
const catchAsync=require('../Utils/catchAsync');
const Product=require('../Model/productModel');//product model is called 

exports.getAllProducts=catchAsync(async(req,res,next)=>{//exports is to not have need to start exporting later
    const products=await Product.find()
    // console.log(req.query)
    res.status(200).json({
        status:'success',
        data:{
            products
        }
    })
})
exports.getOneProduct=catchAsync(async(req,res,next)=>{
    const products=await Product.findOne(req.params.id)
    if(!products){
        return next(new AppError("No Such product that Match's this Id Found",401))
    }
    res.status(201).json({
        status:'success',
        data:{
            products
        }
    })
})
exports.updateProducts=catchAsync(async(req,res,next)=>{
    const products=await Product.findByIdAndUpdate(req.params.id,req.body)
    if(!products){
        return next(new AppError('Product not found',404));
    }res.status(200).json({
        status:'success',
        data:{
            products
        }
    })
})
exports.deleteProducts=catchAsync(async(req,res,next)=>{
    const products=await Product.findByIdAndDelete(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!products)
    {
    return next(new AppError('Product not found',404));
    }res.status(200).json({
        status: 'success',
        data:null,
        message:'Product deleted successfully'
    })      
})
exports.createProduct=catchAsync(async(req,res,next)=>{
    const {product_name,price,description,company_name}=req.body
    if(!product_name||!price||!description||!company_name){
        return next(new AppError('All fields are required',400))
    }
    const newProduct=await Product.create(product_name,price,description,company_name)

    res.status(201).json({
        status:'success',
        data:{
            product:newProduct
        }

    })
})

