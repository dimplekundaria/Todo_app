// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/todoapp');

// const db = mongoose.connection;

// //  error
// db.on('error', console.error.bind(console, 'error in connecting to db'));

// // up and running then print the message
// db.once('open', function(){
//     console.log('Successfully connected to the database');

// });
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/todoapp",{
	useNewUrlParser:true, 
	useUnifiedTopology: true,
	useFindAndModify:true
});

//describe the connection (to check if its sucessful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then print the message
db.once('open',function(){
    console.log('successfully connected to database');
});

