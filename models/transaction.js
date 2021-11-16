const { getDb } = require("../configDb/mongodb")
const { ObjectId } = require("mongodb")

class Transaction {
  static getAll() {
    //aggregation AddFields and toInt
    let newQty = {
      $addFields: {
        convertQty: { $toInt: "$total" }
      }
    }

    //aggregation sort by Qty and lookup from the stock
    return getDb().collection('transaction').aggregate([
      newQty,
      {
        $lookup: {
          from: "stock",
          localField: "itemName",
          foreignField: "item",
          as: "fromItems"
        }
      }, { $sort: { convertQty: -1 } }
    ]).toArray()
  }

  static getSummary() {

    return getDb().collection('transaction').aggregate([
      // lookup and merged object
      {
        $lookup: {
          from: "stock",
          localField: "itemName",
          foreignField: "item",
          as: "transactions"
        }
      }, 
      { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$transactions", 0] }, "$$ROOT"] } } },
      { $project: { transactions: 0 } },
      // toInt price and total qty
      {
        $addFields: {
          convertPrice: { $toInt: "$price" },
          convertTotal: { $toInt: "$total" },
        }
      },
      //grouping total (total * price) by each item
      { $group: { _id: "$item", total: { $sum: { $multiply: ["$convertTotal", "$convertPrice"] } } } },
      { $sort: { total: -1 } }
    ]).toArray()
  }

  static add(data) {
    return getDb().collection("transaction").insertOne(data)
  }

  static delete(id) {
    return getDb().collection('transaction').deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Transaction