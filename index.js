const express=require('express');
const app=express();
const port=7070;

const path=require('path')

// set up database
const db=require('./config/mongoose')
const Home=require('./models/home');

//set up our view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

app.use(express.urlencoded());

// var todoList=[
//     {
//         description:"Why not add a task",
//         category:"School",
//         date:"may 2, 2020"
        
//     }
// ]



// CREATE task in the list
 app.post('/create-task',function(req, res){
    Home.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
    if(err){
        console.log('error in creating a contact!');
        return;
    }
    return res.redirect('back');
});
 });

//  READ task of list
 app.get('/',function(req,res){
    Home.find({},function(err, tasks){
     if(err){
         console.log('Error in fetching data from db');
         return;
     }
     return res.render('home',{
        title:"TodoApp",
        todo_list:tasks
    
    });
    });
});

// UPDATE tasks of the list
app
.route("/edit-task")
.get((req, res) => {
let id = req.query.id;
Home.find({}, (err, tasks) => {
res.render("home.ejs", { todo_list: tasks, idTask: id });
});
})
.post((req, res) => {
let id = req.query.id;
Home.findByIdAndUpdate(id, { description:req.body.description, date: req.body.date }, err => {
if (err) return res.send(500, err);
res.redirect("/");
});
});

// DELETE task of list
app.get('/delete-task',function(req, res){
    
    let id=req.query.id;  // get the id from query in the URL
    // find the task in the database using id and delete it
    Home.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting an object from the database');
            return;
        }
        return res.redirect('back');
    });

});



app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('Yup! My Express Server is running on Port:',port);
});