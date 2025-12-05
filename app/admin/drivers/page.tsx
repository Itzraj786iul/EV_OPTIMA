'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { mockDrivers } from '@/lib/mockData';
import { FiSearch, FiDownload, FiUser } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DriverManagement() {
  const drivers = mockDrivers;

  const timelineData = drivers.map((driver) => ({
    name: driver.name,
    risk: driver.riskScore,
  }));

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">Driver Management</h1>
          <button className="px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all flex items-center gap-2">
            <FiDownload size={20} />
            Download Report
          </button>
        </div>

        {/* Driver Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {drivers.map((driver) => (
            <div key={driver.id} className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center">
                  <FiUser className="text-dark-bg" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{driver.name}</h3>
                  <p className={`text-sm font-semibold ${
                    driver.riskScore <= 3 ? 'text-green-400' :
                    driver.riskScore <= 6 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {driver.category} Driver
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Score</span>
                  <span className={`font-bold ${
                    driver.riskScore <= 3 ? 'text-green-400' :
                    driver.riskScore <= 6 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {driver.riskScore}/10
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Harsh Braking</span>
                  <span className="text-white">{driver.harshBraking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rapid Accel</span>
                  <span className="text-white">{driver.rapidAcceleration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Overspeeding</span>
                  <span className="text-white">{driver.overspeeding}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Smoothness</span>
                  <span className="text-electric-blue font-bold">{driver.smoothnessScore.toFixed(1)}/10</span>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all">
                View Analytics
              </button>
            </div>
          ))}
        </div>

        {/* Risk Score Timeline */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Driver Risk Score Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" domain={[0, 10]} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              <Line type="monotone" dataKey="risk" stroke="#00E5FF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Driver List Table */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">All Drivers</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-electric-blue/30">
                  <th className="text-left py-3 px-4 text-gray-400">Driver Name</th>
                  <th className="text-left py-3 px-4 text-gray-400">Risk Score</th>
                  <th className="text-left py-3 px-4 text-gray-400">Category</th>
                  <th className="text-left py-3 px-4 text-gray-400">Harsh Braking</th>
                  <th className="text-left py-3 px-4 text-gray-400">Rapid Accel</th>
                  <th className="text-left py-3 px-4 text-gray-400">Overspeeding</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-white font-semibold">{driver.name}</td>
                    <td className="py-3 px-4">
                      <span className={`font-bold ${
                        driver.riskScore <= 3 ? 'text-green-400' :
                        driver.riskScore <= 6 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {driver.riskScore}/10
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        driver.category === 'Good' ? 'bg-green-500/20 text-green-400' :
                        driver.category === 'Average' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {driver.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{driver.harshBraking}</td>
                    <td className="py-3 px-4 text-gray-300">{driver.rapidAcceleration}</td>
                    <td className="py-3 px-4 text-gray-300">{driver.overspeeding}</td>
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

