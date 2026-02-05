const StatCard = ({ title, value, trend }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <p className="text-xs font-medium text-slate-500">{title}</p>
    <h3 className="mt-2 text-2xl font-semibold text-slate-900">{value}</h3>
    <p className="mt-1 text-xs text-emerald-600">{trend}</p>
  </div>
);

export default StatCard;
