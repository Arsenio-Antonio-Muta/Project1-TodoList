const express = require('express');
const exphbs = require('express-handlebars').engine()

const app = express();

const conn = require('./db/conn')

const Task = require('./models/Task')

const taskRoutes = require('./routes/tasksRoutes')


app.engine('handlebars', exphbs)
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  }))

app.use(express.json())

app.use(express.static('public'))

// Rotas
app.use('/tasks', taskRoutes)

conn
.sync()
.then(() => {
  app.listen(3010)
})
.catch((err) => console.log(err))