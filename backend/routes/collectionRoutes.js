const express = require('express');
const { createCollection, getCollections } = require('../controllers/collectionController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', authorize('Admin', 'Agent'), createCollection);
router.get('/', authorize('Admin', 'Agent', 'Viewer'), getCollections);

module.exports = router;
