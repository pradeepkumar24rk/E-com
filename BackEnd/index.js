const express=require("express");
const app= express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");             // hide the data 
var cors = require('cors')

app.use(cors());

/* Routers */
const userRoute=require("./routers/user");
const authRoute=require("./routers/auth");
const productRoute=require("./routers/product");
const orderRoute=require("./routers/order");
const cartRoute=require("./routers/cart");
const stripeRoute=require("./routers/stripe");

// const womenRoute=require("./routers/women");
// const commentRoute=require("./routers/comment");

dotenv.config();                            //config the hide data

mongoose.connect(process.env.MONGO_URL)        //MONGO_URL is key to use the value
.then((()=>{
console.log("successfully")
}))
.catch(((err)=>{
    console.log(err);
}))


app.use(express.json());                    //we should input as json 
app.use("/api/user",userRoute);
app.use('/api/auth',authRoute);
app.use('/api/product',productRoute);
app.use('/api/order',orderRoute);
app.use('/api/cart',cartRoute);
app.use('/api/checkout',stripeRoute);

//women
// app.use('/api/data',womenRoute);
// app.use('/api/post',commentRoute);


// app.get("/api/test",()=>{
//     console.log("test success");       //without routers
// })


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running");
})
