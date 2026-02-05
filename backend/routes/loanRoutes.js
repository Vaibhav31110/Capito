const express = require('express');
const { createLoan, getLoans, updateLoan, approveLoan } = require('../controllers/loanController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', authorize('Admin', 'Agent'), createLoan);
router.get('/', authorize('Admin', 'Agent', 'Viewer'), getLoans);
router.put('/:id', authorize('Admin', 'Agent'), updateLoan);
router.put('/:id/approve', authorize('Admin'), approveLoan);

module.exports = router;
