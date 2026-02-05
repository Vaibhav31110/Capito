const Customers = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Customer Master</h2>
        <p className="text-sm text-slate-500">Manage KYC, QR codes, and assignments.</p>
      </div>
      <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
        Add Customer
      </button>
    </div>
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Search by name or phone" />
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>All Agents</option>
          <option>Agent Priya</option>
          <option>Agent Rahul</option>
        </select>
      </div>
      <div className="mt-6 grid gap-3 text-sm text-slate-600">
        {['Anitha Rao', 'Sandeep Kumar', 'Lakshmi Devi'].map((name) => (
          <div key={name} className="flex flex-wrap items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div>
              <p className="font-medium text-slate-800">{name}</p>
              <p className="text-xs text-slate-500">Active • Assigned to Agent Priya</p>
            </div>
            <button className="text-xs font-semibold text-brand-600">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Customers;
