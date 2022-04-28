const router = require('express').Router();
// const categoryRoutes = require('./api/categories');
// // const productRoutes = require('./api/products');
// // const tagRoutes = require('./api/tags');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('./models/category', categoryRoutes);
// router.use('./models/product', productRoutes);
// router.use('./models/tag', tagRoutes);

router.use((req, res) => {
  return res.send('Wrong Route!');
});

module.exports = router;