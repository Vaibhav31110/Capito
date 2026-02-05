import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Loans from './pages/Loans';
import Collections from './pages/Collections';
import Approvals from './pages/Approvals';
import Settings from './pages/Settings';
import Login from './pages/Login';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-slate-50">
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <Layout>
          <Dashboard />
        </Layout>
      }
    />
    <Route
      path="/customers"
      element={
        <Layout>
          <Customers />
        </Layout>
      }
    />
    <Route
      path="/loans"
      element={
        <Layout>
          <Loans />
        </Layout>
      }
    />
    <Route
      path="/collections"
      element={
        <Layout>
          <Collections />
        </Layout>
      }
    />
    <Route
      path="/approvals"
      element={
        <Layout>
          <Approvals />
        </Layout>
      }
    />
    <Route
      path="/settings"
      element={
        <Layout>
          <Settings />
        </Layout>
      }
    />
  </Routes>
);

export default App;
