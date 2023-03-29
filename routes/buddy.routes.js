const express = require('express');
const router = express.Router();

const buddyController = require('../controllers/buddy.controller');

router.post("/add",buddyController.addBuddy);
router.get("/get", buddyController.getBuddy);
router.get("/getAll", buddyController.getAllBuddy);
router.put("/update", buddyController.updateBuddy);
router.delete("/delete", buddyController.deleteBuddy);


module.exports = router;