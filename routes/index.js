const StockContoller = require("../controllers/stock")
const TransactionController = require("../controllers/transaction")

const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("hello word!")
})

router.get("/transactions", TransactionController.getAll)
router.get("/transactions/summary", TransactionController.getSummary)
router.post("/transactions", TransactionController.add)
router.delete("/transactions/:id", TransactionController.delete)


router.get("/stocks", StockContoller.getAll)
router.post("/stocks", StockContoller.add)
router.delete("/stocks/:id", StockContoller.delete)

module.exports = router