const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const objectId = require('mongodb').ObjectID
const jwt = require('jsonwebtoken')




blogsRouter.get('/', async (req, res)=>{
    const blogs = await Blog.find({}).populate('user', {username:1,name:1})
    res.json(blogs.map(blog=>blog.toJSON()))
    
})

blogsRouter.post('/', async  (req, res, next)=>{
    console.log('POSTO CONSOLE', req.token)
    const body = req.body

    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    if (!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    if(!body.title || !body.url){
        return  res.status(400).json(console.log('title or url is missing'))
    }else {
        const blog = new Blog({
            title:body.title,
            author:body.author,
            url:body.url,
            likes:body.likes || 0,
            userID: user._id,
            user: user._id,
            comments:[]
        })
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    res.json(savedBlog.toJSON())
       
    }  
})


// blogsRouter.post('/:id', async (req, res , next)=>{
//     await Blog.updateOne({"_id": objectId(req.params.id)},{$set :{"likes": 0}})
//     res.sendStatus(200).end()
    
// })


blogsRouter.delete('/:id', async (req, res , next )=>{
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    if (!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }
    await Blog.deleteOne({"_id": objectId(req.params.id)})
    res.sendStatus(204).end()
})

blogsRouter.put('/:id', async (req, res , next)=>{
    console.log('backend: ', req.params.id )
    await Blog.update({"_id": objectId(req.params.id)},{$inc :{"likes": +1}})
    res.sendStatus(200).end()
    
})

blogsRouter.post(`/:id/`, async (req , res , next)=> {

    const comment = req.body
    const id = req.params.id
    console.log('backende: komentaras',comment)
    console.log('backende: id',id)
    await Blog.findOneAndUpdate({"_id": objectId(id)},{$push:{comments:comment}})
    res.sendStatus(200).end
})


module.exports = blogsRouter