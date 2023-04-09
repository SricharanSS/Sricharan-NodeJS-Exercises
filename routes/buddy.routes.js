const express = require('express');
const router = express.Router();

const addBuddyController = require('../controllers/addBuddy.controller');
const getBuddyController = require('../controllers/getBuddy.controller');
const getAllBuddyController = require('../controllers/getAllBuddyController');
const updateBuddyController = require('../controllers/updateBuddy.controller');
const deleteBuddyController = require('../controllers/deleteBuddy.controller');

router.post("/add", addBuddyController.addBuddy);
router.get("/get", getBuddyController.getBuddy);
router.get("/getAll", getAllBuddyController.getAllBuddy);
router.put("/update", updateBuddyController.updateBuddy);
router.delete("/delete", deleteBuddyController.deleteBuddy);


module.exports = router;