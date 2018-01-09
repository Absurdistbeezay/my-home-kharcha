const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');

router.get('/', (req, res)=>{
 res.render('index/welcome');
});
router.get('/about', (req, res)=>{
    res.render('index/about');
   });

router.get('/dashboard', ensureAuthenticated, (req, res)=>{
res.render('index/dashboard');
});

router.get('/expenses/add', ensureAuthenticated, (req, res)=>{
    res.render('expenses/add');
    });

module.exports = router;  