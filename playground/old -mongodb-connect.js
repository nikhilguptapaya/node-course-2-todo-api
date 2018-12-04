//const MongoClient = require('mongodb').MongoClient;

/* var obj = new ObjectID();
console.log(obj); */
/* var user = {name: 'Nikhil', age: 46};
var {name} = user;
console.log(name); */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
      console.log('Todos'); 
      console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });

/*   db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
 
    console.log(JSON.stringify(result.ops, undefined, 2));
  }); */

  // Insert new doc into Users (name, age, location)
/*    db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  }); 
 */
  //db.close();
});
