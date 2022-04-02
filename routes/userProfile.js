const router = require('express').Router();
const { json } = require('express/lib/response');
const UserProfileModel = require('../models/UserProfile');

//CREATE PERSON
router.post('/',  async(req, res) => {
    const newPerson = new UserProfileModel(req.body);

    try {
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//UPDATE PERSON
router.put("/:id",  async(req, res) => {
    try {
        const updatedPerson = await UserProfileModel.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, {new: true});
        res.status(200).json(updatedPerson);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE PERSON

router.delete("/:id", async(req, res) => {
    try {
        await UserProfileModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User Profile has been deleted.");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET PERSON
router.get("/:id", async(req, res) => {
    try {
        const persons = await UserProfileModel.find({userId: req.params.id});
        res.status(200).json(persons);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async(req, res) => {
    try {
        const userProfiles = await UserProfileModel.find();
        res.status(200).json(userProfiles);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;