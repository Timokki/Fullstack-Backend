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

// Route /api/notes hakemistoon
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// Route /info hakemistoon
app.get('/info', (req, res) => {
    let reqTime = new Date(Date.now())
    res.send(
        `phonebook has info for ${persons.length} people <br>
        ${reqTime.toString()}`
    )
    console.log("res.Headers: ", res.dat)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})