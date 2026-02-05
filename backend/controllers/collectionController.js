const Collection = require('../models/Collection');
const asyncHandler = require('../utils/asyncHandler');

const createCollection = asyncHandler(async (req, res) => {
  const { customer, amount } = req.body;
  if (!customer || !amount) {
    return res.status(400).json({ message: 'Customer and amount are required' });
  }
  const collection = await Collection.create({
    ...req.body,
    agent: req.user._id
  });
  res.status(201).json(collection);
});

const getCollections = asyncHandler(async (req, res) => {
  const collections = await Collection.find()
    .populate('customer', 'fullName phone')
    .populate('agent', 'name email');
  res.json(collections);
});

module.exports = { createCollection, getCollections };
