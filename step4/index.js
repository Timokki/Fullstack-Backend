const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122"
    }
]

// Route juureen. Routet ovat tapahtumankäsittelijöitä, jotka käsittelevät pyynnöt osoitteeseen.
// request parametri sisältää pyynnön tiedot ja responsen avulla määritellään miten pyyntöön vastataan
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// Route /api/persons hakemistoon
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// Route /api/persons/id hakemistoon
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  console.log(`Person id: ${id}`)

  if (person) {    
    res.json(person)  
  } 
  else {
      res.status(404).end()  
    }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id) //Palauttaa taulukon jossa on kaikki muut paitsi person.id objekti

  res.status(204).end()
})

// Route /info hakemistoon
app.get('/info', (req, res) => {
    let reqTime = new Date(Date.now())
    res.send(
        `phonebook has info for ${persons.length} people <br>
        ${reqTime.toString()}`
    )
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})