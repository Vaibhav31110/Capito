const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    tenureMonths: { type: Number, required: true },
    emiAmount: { type: Number },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'disbursed', 'closed'],
      default: 'pending'
    },
    disbursedAt: { type: Date },
    outstandingAmount: { type: Number },
    overdueAmount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Loan', loanSchema);
