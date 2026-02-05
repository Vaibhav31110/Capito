const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['customer', 'loan', 'pigmy-withdrawal', 'deposit-release', 'loan-closure'],
      required: true
    },
    referenceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    remarks: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Approval', approvalSchema);
