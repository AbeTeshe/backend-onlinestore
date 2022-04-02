
const router = require('express').Router();
const ProductModel = require("../models/Product");

//CREATE PRODUCT 
router.post("/",  async(req, res) => {
    const newProduct = new ProductModel(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})
//UPDATE
router.put("/:id",  async (req, res) => {
    
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct);

    } catch (err) {
        res.status(500).json(err);
    }
});


//DELETE 
router.delete("/:id",  async(req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id", async(req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
    
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async(req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const product= await ProductModel.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;