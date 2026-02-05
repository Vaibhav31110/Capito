import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-500">Monitor collections, approvals, and cash flow.</p>
      </div>
      <div className="rounded-xl bg-white px-4 py-2 shadow-sm border border-slate-100">
        <p className="text-sm font-medium text-slate-700">{user?.name || 'Admin User'}</p>
        <p className="text-xs text-slate-500">{user?.role || 'Admin'}</p>
      </div>
    </header>
  );
};

export default Header;
