const Collection = require('../models/Collection');

const createCollection = async (req, res) => {
  const collection = await Collection.create({
    ...req.body,
    agent: req.user._id
  });
  res.status(201).json(collection);
};

const getCollections = async (req, res) => {
  const collections = await Collection.find()
    .populate('customer', 'fullName phone')
    .populate('agent', 'name email');
  res.json(collections);
};

module.exports = { createCollection, getCollections };
