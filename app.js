const express = require('express')
const { runDb } = require('./configDb/mongodb')
const app = express()
const port = 3000
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

runDb()
  .then(() => {
    app.listen(port, () => {
      console.log('app listened at localhost' + port)
    })
  })
  .catch(console.dir)