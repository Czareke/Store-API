require('dotenv').config()
const mocData=require('./products.json')
const product=require('./Model/productModel')

const connectDB=require('./db/connect')

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL) //connect to the mongoose db
        await product.create(mocData)//insert data to the product model
        console.log('Success!!!')
        process.exit()//exited successfully
    }
    catch(err){
        console.log(err)//if there is an error,it is printed to the console
        process.exit(1)
    }
}

start()