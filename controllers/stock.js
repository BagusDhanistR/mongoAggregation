const Stock = require("../models/stock");

class StockContoller {
  static async getAll(req, res) {
    try {
      const stock = await Stock.getAll()
      res.status(200).json({stock})
    } catch (error) {
      console.log(error);
    }
  }

  static async add(req, res) {
    try {
      const stock = await Stock.add(req.body)
      res.status(201).json({stock})
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    try {
      const stock = await Stock.delete(req.params.id)
      res.status(201).json({stock})
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = StockContoller