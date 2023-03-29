const express = require('express');
const router = express.Router();
const fs = require('fs');

const addBuddy = require('../controllers/addBuddy');
const getBuddy = require('../controllers/getBuddy');
const getAllBuddy = require('../controllers/getAllBuddy');
const updateBuddy = require('../controllers/updateBuddy');
const deleteBuddy = require('../controllers/deleteBuddy');

router.post("/add", addBuddy);
router.get("/get", getBuddy);
router.get("/getAll", getAllBuddy);
router.put("/update", updateBuddy);
router.delete("/delete", deleteBuddy);


module.exports = router;