const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Pedro',
  //   age: 25,
  //   location: 'SP',
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })
  //}
  // db.collection('Todos').find({completed:true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   return console.log('Unable to fetch todos',err);
  // });
    db.collection('Users').find({name:'Pedro'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
      return console.log('Unable to fetch users');
    });



  client.close();
});
