const Customer = require('../models/Customer');

const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json(customer);
};

const getCustomers = async (req, res) => {
  const customers = await Customer.find().populate('assignedAgent', 'name email');
  res.json(customers);
};

const getCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id).populate('assignedAgent', 'name email');
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.json(customer);
};

const updateCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.json(customer);
};

module.exports = { createCustomer, getCustomers, getCustomer, updateCustomer };
