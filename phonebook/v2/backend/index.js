const express = require('express')
const app = express()
const  morgan = require('morgan')
const cors = require('cors')


app.use(cors())
app.use(express.static('build'))




morgan.token('body', (req, res)=>{
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status - :response-time ms :body' ))


 let persons = [
    { 'name': 'test1',
    'number': '040-123456',
    'id': 1
  },
  {
    'name': 'test2',
    'number': '39-44-5323523',
    'id': 2
  },
  {
    'name': 'test3',
    'number': '12-43-234345',
    'id': 3
  },
  {
    'name': 'test4',
    'number': '39-23-6423122',
    'id': 4
  }
 ]



app.get('/persons', (req, res)=>{
    res.json(persons)
})

app.get('/info', (req, res)=>{
    const date = new Date()
    res.send(`<p> phonebook has info for ${persons.length} people</p><p>${date}</p>`)
    
})

app.get('/api/persons/:id', (req, res)=>{
    const id = Number(req.params.id)
    const person =  persons.find( person => person.id === id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (req, res)=>{
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end() 
})

app.use(express.json())

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(p=>p.id))
    : 0
    return maxId +1
}
app.post('/api/persons', (req, res)=>{
    const body = req.body
    const name = persons.find(person => person.name === body.name)

    if(name){
        return res.status(400).json({
            error:'name already exist'
        })
    }else if(!body.name){
        return res.status(400).json({
            error:'name is missing'
        })
      }else if(!body.number){
          return res.status(400).json({
              error:'number is missing'
          })
      }

    const person ={
        name: body.name,
        number: body.number,
        id: generateId()
    }

    
    persons = persons.concat(person)
    res.json(person)
})


const PORT =  process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})