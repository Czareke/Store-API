const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();
router.route('/products').get(productController.getAllProducts);

router
    .route('/products/:id')
    .get(productController.getOneProduct)
    .patch(productController.updateProducts)
    .delete(productController.deleteProducts);
module.exports = router;
