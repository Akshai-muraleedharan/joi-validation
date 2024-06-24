
const express =require('express')
const app = express();
const joi =require('joi')
require('dotenv').config()

const port =process.env.PORT || 4000

 function addProduct(products){

    const joiSchema = joi.object({
        title: joi.string()
        .min(5)
        .max(30)
        .required(),
       
        category:joi.string()
        .min(2)
        .required(),
    
         image:joi.string()
         .required(),
    
        price:joi.number()
        .min(0)
        .required(),
    
        quantity:joi.number()
        .min(0)
        .required()
        .integer(),
    
        
       })

       return joiSchema.validate(products)

 }
   
 const productData = {
    title: 'Samsung galaxy A12',
    category: 'Phone',
    image: 'https://images.unsplash.com/photo-1719067599944-b1922706ddbe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    quantity:13
 }

response = addProduct(productData)



if(response.error){
    console.log(response.error.details);
}else{
    console.log("Data added successfully")
}

app.listen(port,()=>{
    console.log(`port connected successfully on ${port}`)
})