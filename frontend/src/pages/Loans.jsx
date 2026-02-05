const Loans = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Loan Management</h2>
        <p className="text-sm text-slate-500">Create, approve, and track loan lifecycle.</p>
      </div>
      <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
        New Loan Application
      </button>
    </div>
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Customer Name" />
        <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Amount" />
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Disbursed</option>
        </select>
      </div>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {['Loan #1120 • ₹1.2L • 12% • 12 months', 'Loan #1118 • ₹85K • 14% • 9 months'].map((loan) => (
          <div key={loan} className="flex flex-wrap items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="font-medium text-slate-800">{loan}</p>
            <button className="text-xs font-semibold text-brand-600">Review</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Loans;
