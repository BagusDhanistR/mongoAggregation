const Transaction = require("../models/transaction");

class TransactionController {
  static async getAll(req, res) {
    try {
      const transaction = await Transaction.getAll()
      res.status(200).json({transaction})
    } catch (error) {
      console.log(error);
    }
  }
  
  static async getSummary(req, res) {
    try {
      const transaction = await Transaction.getSummary()
      res.status(200).json({transaction})
    } catch (error) {
      console.log(error);
    }
  }

  static async add(req, res) {
    try {
      const transaction = await Transaction.add(req.body)
      res.status(201).json({transaction})
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    try {
      const transaction = await Transaction.delete(req.params.id)
      res.status(201).json({transaction})
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = TransactionController