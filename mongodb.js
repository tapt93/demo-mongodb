const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID();
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log({ error })
  }
  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'AnhNT141',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Fail')
  //   }
  //   console.log(result.ops)
  // })

  db.collection('users').findOne({ age: 28 }, (error, user) => {
    if(error){
      return console.log(error)
    }
    console.log(user)
  })
 
})