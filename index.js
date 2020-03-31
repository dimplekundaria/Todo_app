const express=require('express');
const app=express();
const port=7070;

//set up our view engine
app.set('view engine','ejs');
app.set('views','./views');







app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('Yup! My Express Server is running on Port:',port);
});