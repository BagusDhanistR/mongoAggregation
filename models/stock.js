const { getDb } = require("../configDb/mongodb")
const { ObjectId } = require("mongodb")

class Stock {
  static getAll() {
    //aggregation AddFields and toInt
    let newQty = {
      $addFields: {
        convertQty: { $toInt: "$qty" },
        convertPrice: { $toInt: "$price" }
      }
    }
    //aggregation sort by Qty
    return getDb().collection('stock').aggregate([newQty, { $sort: { convertQty: -1 } }]).toArray()
  }
  
  static add(data) {
    return getDb().collection("stock").insertOne(data)
  }

  static delete(id) {
    return getDb().collection('stock').deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Stock