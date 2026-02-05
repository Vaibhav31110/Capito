const Approvals = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Approval Workflow</h2>
        <p className="text-sm text-slate-500">Review new customers, loans, and releases.</p>
      </div>
      <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
        Review Queue
      </button>
    </div>
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-3 text-sm text-slate-600">
        {['Loan approval pending • KYC verified', 'Pigmy withdrawal • ₹15,000'].map((item) => (
          <div key={item} className="flex flex-wrap items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="font-medium text-slate-800">{item}</p>
            <div className="flex gap-2">
              <button className="rounded-lg border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-600">
                Approve
              </button>
              <button className="rounded-lg border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-500">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Approvals;
