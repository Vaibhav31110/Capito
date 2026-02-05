const express = require('express');
const { createApproval, getApprovals, updateApproval } = require('../controllers/approvalController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', authorize('Admin', 'Agent'), createApproval);
router.get('/', authorize('Admin', 'Viewer'), getApprovals);
router.put('/:id', authorize('Admin'), updateApproval);

module.exports = router;
