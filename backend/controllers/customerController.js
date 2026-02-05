const Customer = require('../models/Customer');
const asyncHandler = require('../utils/asyncHandler');

const createCustomer = asyncHandler(async (req, res) => {
  const { fullName, phone } = req.body;
  if (!fullName || !phone) {
    return res.status(400).json({ message: 'Customer name and phone are required' });
  }
  const customer = await Customer.create(req.body);
  res.status(201).json(customer);
});

const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find().populate('assignedAgent', 'name email');
  res.json(customers);
});

const getCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id).populate('assignedAgent', 'name email');
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.json(customer);
});

const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.json(customer);
});

module.exports = { createCustomer, getCustomers, getCustomer, updateCustomer };
