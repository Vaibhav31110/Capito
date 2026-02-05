const Approval = require('../models/Approval');
const asyncHandler = require('../utils/asyncHandler');

const createApproval = asyncHandler(async (req, res) => {
  const { type, referenceId } = req.body;
  if (!type || !referenceId) {
    return res.status(400).json({ message: 'Approval type and reference are required' });
  }
  const approval = await Approval.create({
    ...req.body,
    requestedBy: req.user._id
  });
  res.status(201).json(approval);
});

const getApprovals = asyncHandler(async (req, res) => {
  const approvals = await Approval.find()
    .populate('requestedBy', 'name email')
    .populate('reviewedBy', 'name email');
  res.json(approvals);
});

const updateApproval = asyncHandler(async (req, res) => {
  const approval = await Approval.findByIdAndUpdate(
    req.params.id,
    { ...req.body, reviewedBy: req.user._id },
    { new: true }
  );
  if (!approval) {
    return res.status(404).json({ message: 'Approval not found' });
  }
  res.json(approval);
});

module.exports = { createApproval, getApprovals, updateApproval };
