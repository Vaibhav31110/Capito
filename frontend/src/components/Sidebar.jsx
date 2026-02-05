import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/customers', label: 'Customers' },
  { to: '/loans', label: 'Loans' },
  { to: '/collections', label: 'Collections' },
  { to: '/approvals', label: 'Approvals' },
  { to: '/settings', label: 'Settings' }
];

const Sidebar = () => (
  <aside className="w-full md:w-60 bg-white border-r border-slate-200 p-4">
    <div className="mb-6">
      <h1 className="text-xl font-semibold text-brand-600">Capito Finance</h1>
      <p className="text-xs text-slate-500">Microfinance Operations Suite</p>
    </div>
    <nav className="space-y-2">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 text-sm font-medium ${
              isActive ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-100'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
