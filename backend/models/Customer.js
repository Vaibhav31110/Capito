const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema(
  {
    aadharUrl: String,
    panUrl: String,
    photoUrl: String
  },
  { _id: false }
);

const customerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['active', 'blocked'], default: 'active' },
    kycDocuments: kycSchema,
    qrCodeValue: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);
