const Loan = require('../models/Loan');
const asyncHandler = require('../utils/asyncHandler');

const calculateEmi = (amount, interestRate, tenureMonths) => {
  if (!interestRate || interestRate === 0) {
    return Number((amount / tenureMonths).toFixed(2));
  }
  const monthlyRate = interestRate / 12 / 100;
  const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
  const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
  return Number((numerator / denominator).toFixed(2));
};

const createLoan = asyncHandler(async (req, res) => {
  const { amount, interestRate, tenureMonths, customer } = req.body;
  if (!amount || !tenureMonths || !customer) {
    return res.status(400).json({ message: 'Amount, tenure, and customer are required' });
  }
  const emiAmount = calculateEmi(amount, interestRate || 0, tenureMonths);
  const loan = await Loan.create({
    ...req.body,
    emiAmount,
    outstandingAmount: amount
  });
  res.status(201).json(loan);
});

const getLoans = asyncHandler(async (req, res) => {
  const loans = await Loan.find().populate('customer', 'fullName phone');
  res.json(loans);
});

const updateLoan = asyncHandler(async (req, res) => {
  const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!loan) {
    return res.status(404).json({ message: 'Loan not found' });
  }
  res.json(loan);
});

const approveLoan = asyncHandler(async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (!loan) {
    return res.status(404).json({ message: 'Loan not found' });
  }
  loan.status = 'approved';
  await loan.save();
  res.json(loan);
});

module.exports = { createLoan, getLoans, updateLoan, approveLoan };
