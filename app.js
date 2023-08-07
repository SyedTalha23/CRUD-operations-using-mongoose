// mongoose docs: https://mongoosejs.com/docs/index.html

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

  await mongoose.connect('mongodb://127.0.0.1:27017/personDB');
  console.log("connec ted successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  const personSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        required:[true,"inserting age is necessary"], //required:true <-- shortcut
        min:0,
        max:150
    }
  })

  const Person=mongoose.model("Person",personSchema) // it will create/connect to "people" collection 

  // single inserts-----------------------------------------

//   const person=new Person({
//     name:"bbb",
//     age:2
//   })
//   const person=new Person({
//     name:"aaa",
//     age:1
//   })

//   const person=new Person({
//     age:5
//   })

//   await person.save();

// multiple inserts----------------------------------------

//   const people=[
//     {
//         name:"ccc",
//         age:3
//     },
//     {
//         name:"ddd",
//         age:4
//     }]

//     await Person.insertMany(people)
//     console.log("done");

//find operation----------------------------------------
//   const data= await Person.find({})
//   data.forEach(function(ele){
//     console.log(ele.name);
//   })
//   console.log(data);

//below way of find does not work in newer mongoose, cuz find does not accepts callbacks anymore
// Person.find(function(err,people){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(people);
//     }
// })

//update operation--------------------------------------

// await Person.updateOne({_id:"64ca74b7e5abbdaad848a964"},{name:"fff",age:6})

// delete operation------------------------------------------

//   await Person.deleteOne({name:"aaa"})

// closing connection --------------------------------------
  mongoose.connection.close();
 
}