const express = require('express');
const router = express.Router();

const buddyController = require('../controllers/buddy.controller');

router.post("/addBuddy", buddyController.addBuddy);
router.get("/getBuddy/:empid", buddyController.getBuddy);
router.get("/getAllBuddies", buddyController.getAllBuddies);
router.put("/updateBuddy/:empid", buddyController.updateBuddy);
router.delete("/deleteBuddy/:empid", buddyController.deleteBuddy);


module.exports = router;