const exp = require('express');
const path = require('path');
const router = exp.Router();

module.exports = router;

// app.use checks for includes
// app.get / app.post ... checks for exact match

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    // can do the response here...
});
