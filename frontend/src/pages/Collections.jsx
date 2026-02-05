const Collections = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Collection Management</h2>
        <p className="text-sm text-slate-500">Track daily collections and receipts.</p>
      </div>
      <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
        New Collection Entry
      </button>
    </div>
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>Agent</option>
          <option>Priya</option>
          <option>Rahul</option>
        </select>
        <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Date" />
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>Payment Mode</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Bank</option>
        </select>
      </div>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {['₹12,400 collected • Agent Priya', '₹8,750 collected • Agent Rahul'].map((entry) => (
          <div key={entry} className="flex flex-wrap items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="font-medium text-slate-800">{entry}</p>
            <button className="text-xs font-semibold text-brand-600">View Receipt</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Collections;
