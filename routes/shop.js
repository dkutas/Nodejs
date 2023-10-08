const exp = require('express');
const { getProducts } = require('../controllers/products');
const router = exp.Router();

// app.use checks for includes
// app.get / app.post ... checks for exact match

router.get('/', getProducts);

module.exports = router;
