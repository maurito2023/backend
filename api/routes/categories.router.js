const express = require('express');
const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res)=>{
    const {catedoryId, productId} = req.params;
    res.json({
        catedoryId,
        productId
    })
})

module.exports = router;
