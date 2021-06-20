const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID();
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log({ error })
  }
  const db = client.db(databaseName);

  //add
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

  // db.collection('users').insertMany([
  //   {
  //     name: 'ABC',
  //     age: 28
  //   },
  //   {
  //     name: 'DFE',
  //     age: 28
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Fail')
  //   }
  //   console.log(result.ops)
  // })

  //search by filter
  // db.collection('users').findOne({ age: 28 }, (error, user) => {
  //   if (error) {
  //     return console.log(error)
  //   }
  //   console.log(user)
  // })

  //search by id  
  // db.collection('users').findOne({
  //   _id: new ObjectID("60cf0b9c78433a0718c24682")
  // }, (error, user) => {
  //   if (error) {
  //     return console.log(error)
  //   }
  //   console.log(user)
  // })

  //search
  // db.collection('users').find({ age: 28 }).toArray((error, result) => {
  //   console.log(result)
  // });
  // db.collection('users').count({}, (error, count) => console.log(count))


  //pagination
  //db.collection('users').find({}).batchSize(100).sort({_id: 1}).skip(10).limit(10).toArray()

  //update
  // db.collection('users').updateOne({
  //   _id: new ObjectID("60cf0b9c78433a0718c24682")
  // }, {
  //   $set: {
  //     age: 10
  //   }
  // }).then()

  // db.collection('users').updateMany(
  //   { $
  //     $or: [
  //       {
  //         id: 2,
  //         exist: false
  //       },
  //       {
  //         id: {$ne: 2},
  //         exist: true
  //       }
  //     ]
  //   },
  //   [{$set: {exist: {$eq: [ "$exist", false ] }}}], 
  //   {multi: true}
  // )
})