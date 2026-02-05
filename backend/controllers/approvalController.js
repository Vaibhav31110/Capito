const Approval = require('../models/Approval');

const createApproval = async (req, res) => {
  const approval = await Approval.create({
    ...req.body,
    requestedBy: req.user._id
  });
  res.status(201).json(approval);
};

const getApprovals = async (req, res) => {
  const approvals = await Approval.find()
    .populate('requestedBy', 'name email')
    .populate('reviewedBy', 'name email');
  res.json(approvals);
};

const updateApproval = async (req, res) => {
  const approval = await Approval.findByIdAndUpdate(
    req.params.id,
    { ...req.body, reviewedBy: req.user._id },
    { new: true }
  );
  if (!approval) {
    return res.status(404).json({ message: 'Approval not found' });
  }
  res.json(approval);
};

module.exports = { createApproval, getApprovals, updateApproval };
