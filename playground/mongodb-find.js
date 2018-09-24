// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

// Find all todos
/*
  db.collection('Todos').find().toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, null, 2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  });
*/

// find all uncompleted todos
/*
db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs, null, 2));
},(err) => {
  console.log('Unable to fetch todos', err);
});
*/

// find the todo with a partiular _id
/*
db.collection('Todos').find({
  _id: new ObjectID('5ba901ef5785c51ebce4b240')
}).toArray().then( (docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs, null, 2));
},(err) => {
  console.log('Unable to fetch todos', err);
});
*/

// Count function
/*
db.collection('Todos').find().count().then( (count) => {
  console.log(`Todos count: ${count}`);
},(err) => {
  console.log('Unable to fetch todos', err);
});
*/


// find all users name: Matt
db.collection('Users').find({name: 'Matt', age:20}).toArray().then( (docs) => {
  console.log('Matts Todos');
  console.log(JSON.stringify(docs, null, 2));
},(err) => {
  console.log('Unable to fetch todos', err);
});

  //client.close();
});
