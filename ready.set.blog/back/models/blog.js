const mongoose = require('mongoose')





const blogSchema = mongoose.Schema({
    id: String,
    title: String,
    author: String,
    url: String,
    likes: Number,
    userID: String,
    user:[
      {type: mongoose.Schema.Types.ObjectId,ref: 'User'}
    ],
    comments:[Object]
  })
  
  
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


  module.exports = mongoose.model('Blog', blogSchema)