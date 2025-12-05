'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { mockFleetKPI, mockVehicles, mockDrivers } from '@/lib/mockData';
import { FiTruck, FiUsers, FiActivity, FiAlertTriangle, FiShield } from 'react-icons/fi';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const kpi = mockFleetKPI;
  const vehicles = mockVehicles;
  const drivers = mockDrivers;

  const healthData = vehicles.map((v) => ({
    name: v.id,
    health: v.healthScore,
  }));

  const riskDistribution = [
    { name: 'Good', value: drivers.filter((d) => d.riskScore <= 3).length, color: '#00ff00' },
    { name: 'Average', value: drivers.filter((d) => d.riskScore > 3 && d.riskScore <= 6).length, color: '#ffff00' },
    { name: 'Bad', value: drivers.filter((d) => d.riskScore > 6).length, color: '#ff0000' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiTruck className="text-electric-blue" size={24} />
              <p className="text-gray-400 text-sm">Total EVs</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.totalEVs}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiUsers className="text-red-400" size={24} />
              <p className="text-gray-400 text-sm">High-Risk Drivers</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.highRiskDrivers}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-green-400" size={24} />
              <p className="text-gray-400 text-sm">Avg Fleet Health</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.averageFleetHealth.toFixed(1)}%</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiAlertTriangle className="text-yellow-400" size={24} />
              <p className="text-gray-400 text-sm">Predicted Failures</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.predictedFailures}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiShield className="text-orange-400" size={24} />
              <p className="text-gray-400 text-sm">Warranty Risk</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.warrantyRiskScore.toFixed(1)}%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Vehicle Health Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                <Bar dataKey="health" fill="#00E5FF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Driver Risk Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Vehicles */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Recent Vehicle Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-electric-blue/30">
                  <th className="text-left py-3 px-4 text-gray-400">Vehicle ID</th>
                  <th className="text-left py-3 px-4 text-gray-400">Model</th>
                  <th className="text-left py-3 px-4 text-gray-400">Health Score</th>
                  <th className="text-left py-3 px-4 text-gray-400">Driver</th>
                  <th className="text-left py-3 px-4 text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-semibold">{vehicle.id}</td>
                    <td className="py-3 px-4 text-gray-300">{vehicle.model}</td>
                    <td className="py-3 px-4">
                      <span className={`font-bold ${
                        vehicle.healthScore > 80 ? 'text-green-400' :
                        vehicle.healthScore > 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {vehicle.healthScore}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{vehicle.assignedDriver}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        vehicle.faultPredictions[0] === 'None'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {vehicle.faultPredictions[0] === 'None' ? 'Healthy' : 'Alert'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

