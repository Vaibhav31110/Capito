const ChartCard = ({ title, data }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
      <span className="text-xs text-slate-400">Placeholder</span>
    </div>
    <div className="mt-4 space-y-2">
      {data.map((entry) => (
        <div key={entry.label} className="flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-brand-500"
              style={{ width: `${entry.value}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">{entry.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ChartCard;
