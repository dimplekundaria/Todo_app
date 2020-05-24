const express=require('express');
const app=express();
const port=7050;


//set up our view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));

app.use(express.urlencoded());

var todoList=[
    {
        description:"Why not add a task",
        category:"School",
        date:"may 2, 2020"
        
    }
]

app.get('/',function(req,res){
    return res.render('home',{
        title:"TodoApp",
        todo_list:todoList
    })
})

 app.post('/add-task',function(req, res){
   todoList.push(req.body);
   return res.redirect('back')
 })


app.get('/delete-task/:description',function(req, res){
      console.log(req.params);
      let description=req.params.phone

});


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('Yup! My Express Server is running on Port:',port);
});