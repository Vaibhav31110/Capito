const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    loan: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    paymentMode: { type: String, enum: ['cash', 'bank', 'upi'], default: 'cash' },
    collectedAt: { type: Date, default: Date.now },
    receiptNumber: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Collection', collectionSchema);
