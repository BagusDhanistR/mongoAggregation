
//configure mongoDB in local

const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri)

let database

async function runDb() {
  try{
    await client.connect()
    database = client.db('store_now')
  } catch(err) {
    console.log(err, 'db not connected')
  }
}

function getDb() {
  return database
}

module.exports = {
  getDb, runDb
}