const Product = require('./../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};
exports.postAddProduct = (req, res, next) => {
    new Product(req.body.title).save();
    res.redirect('/');
};
exports.getProducts = (req, res) => {
    const prods = Product.fetchAll();
    res.render('shop', { prods, pageTitle: 'My Shop', path: '/' });
};
