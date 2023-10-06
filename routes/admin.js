const exp = require('express');
const path = require('path');
const router = exp.Router();

module.exports = router;

// /admin/add-product => GET

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});