import Header from '../components/Header';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';

const kpiData = [
  { title: 'Total Customers', value: '1,284', trend: '+6% this month' },
  { title: 'Active Loans', value: '742', trend: '+3% this week' },
  { title: 'Total Loan Amount Given', value: '₹82.4L', trend: '+9% this quarter' },
  { title: 'Total Collection Today', value: '₹3.2L', trend: 'On track' },
  { title: 'Pigmy Total Balance', value: '₹14.8L', trend: '+2% this week' },
  { title: 'Overdue Loans', value: '54', trend: 'Down 1.5%' },
  { title: 'Profit & Interest', value: '₹4.6L', trend: '+12% this month' },
  { title: 'Pending Approvals', value: '19', trend: 'Needs review' },
  { title: 'Agent Performance', value: '87%', trend: 'Top 5 agents' },
  { title: 'Cash In Hand', value: '₹5.1L', trend: 'Reconcile today' }
];

const chartData = {
  collections: [
    { label: 'Week 1', value: 65 },
    { label: 'Week 2', value: 80 },
    { label: 'Week 3', value: 58 },
    { label: 'Week 4', value: 90 }
  ],
  disbursements: [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 55 },
    { label: 'Mar', value: 70 },
    { label: 'Apr', value: 60 }
  ],
  profit: [
    { label: 'Q1', value: 50 },
    { label: 'Q2', value: 68 },
    { label: 'Q3', value: 72 },
    { label: 'Q4', value: 85 }
  ]
};

const Dashboard = () => (
  <div className="space-y-8">
    <Header />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {kpiData.map((kpi) => (
        <StatCard key={kpi.title} {...kpi} />
      ))}
    </section>
    <section className="grid gap-4 lg:grid-cols-3">
      <ChartCard title="Monthly Collection" data={chartData.collections} />
      <ChartCard title="Loan Disbursement" data={chartData.disbursements} />
      <ChartCard title="Profit Trend" data={chartData.profit} />
    </section>
  </div>
);

export default Dashboard;
