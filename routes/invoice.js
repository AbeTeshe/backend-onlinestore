const InvoiceModel = require("../models/Invoice");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newInvoice = new InvoiceModel(req.body);

  try {
    const savedInvoice = await newInvoice.save();
    res.status(200).json(savedInvoice);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedInvoice = await InvoiceModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInvoice);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await InvoiceModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Invoice has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAdmin,  async (req, res) => {
  try {
    const invoices = await InvoiceModel.find({ userId: req.params.userId }).sort({createdAt: -1});
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const invoices = await InvoiceModel.find().sort({createdAt: -1});
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const invoice = await InvoiceModel.findById(req.params.id);
    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME

module.exports = router;