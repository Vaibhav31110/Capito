const Settings = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-semibold text-slate-900">Settings & Configuration</h2>
      <p className="text-sm text-slate-500">Configure interest rates, penalties, branches, and roles.</p>
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700">Finance Rules</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>Interest Rate: 12%</li>
          <li>Penalty Rate: 2% per overdue day</li>
          <li>EMI Rule: Monthly</li>
          <li>Pigmy Tenure: 24 months</li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700">Business Settings</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>Branches: 3 active</li>
          <li>Receipt Format: Digital</li>
          <li>User Roles: Admin, Agent, Viewer</li>
          <li>Document Types: Aadhar, PAN, Photo</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Settings;
