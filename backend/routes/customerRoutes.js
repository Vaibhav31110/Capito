const express = require('express');
const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer
} = require('../controllers/customerController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', authorize('Admin', 'Agent'), createCustomer);
router.get('/', authorize('Admin', 'Agent', 'Viewer'), getCustomers);
router.get('/:id', authorize('Admin', 'Agent', 'Viewer'), getCustomer);
router.put('/:id', authorize('Admin', 'Agent'), updateCustomer);

module.exports = router;
