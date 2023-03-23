const express = require('express');

const router = express.Router();

const {
  verifyIsAdmin,
  verifyIsLoggedIn,
} = require('../middleware/verifyAuthToken');

const {
  getUserOrders,
  getOrder,
  createOrder,
  updateOrderToPaid,
  updateOrderToBeDelivered,
  getOrders,
  getOrderForAnalysis,
} = require('../controllers/orderController');

//user routes
router.use(verifyIsLoggedIn);
router.get('/', getUserOrders);
router.get('/user/:id', getOrder);
router.post('/', createOrder);
router.put('/paid/:id', updateOrderToPaid);

//admin routes
router.use(verifyIsAdmin);
router.put('/delivered/:id', updateOrderToBeDelivered);
router.get('/admin', getOrders);
router.get('/analysis/:date', getOrderForAnalysis);

module.exports = router;
