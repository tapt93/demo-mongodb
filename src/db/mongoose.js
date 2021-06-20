const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongoose.connect(`${connectionURL}/${databaseName}`,
  { useNewUrlParser: true, useCreateIndex: true },
)

const User = mongoose.model('user', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({
  name: 23,
  age: 'asd'
})