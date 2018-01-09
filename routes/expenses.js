const express = require('express');
const router = express.Router();

//Expenses Index
router.get('/', (req, res)=>{
    res.render('expenses/index');
});

//Add Expenses Form

router.get('/add', (req, res)=>{
    res.render('expenses/add');
});

module.exports = router;