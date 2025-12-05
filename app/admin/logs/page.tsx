'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { FiFile, FiSearch, FiDownload, FiUser, FiShield, FiDatabase } from 'react-icons/fi';

const logs = [
  {
    id: '1',
    type: 'login',
    user: 'admin@ev-optima.com',
    action: 'User login',
    timestamp: new Date(Date.now() - 3600000),
    ip: '192.168.1.100',
  },
  {
    id: '2',
    type: 'admin',
    user: 'admin@ev-optima.com',
    action: 'Updated vehicle EV-001',
    timestamp: new Date(Date.now() - 7200000),
    ip: '192.168.1.100',
  },
  {
    id: '3',
    type: 'data',
    user: 'system',
    action: 'Data sync completed',
    timestamp: new Date(Date.now() - 10800000),
    ip: 'N/A',
  },
  {
    id: '4',
    type: 'login',
    user: 'john.doe@example.com',
    action: 'User login',
    timestamp: new Date(Date.now() - 14400000),
    ip: '192.168.1.105',
  },
  {
    id: '5',
    type: 'admin',
    user: 'admin@ev-optima.com',
    action: 'Deleted driver record',
    timestamp: new Date(Date.now() - 18000000),
    ip: '192.168.1.100',
  },
  {
    id: '6',
    type: 'data',
    user: 'system',
    action: 'ML model prediction completed',
    timestamp: new Date(Date.now() - 21600000),
    ip: 'N/A',
  },
];

export default function SystemLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || log.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'login':
        return <FiUser className="text-blue-400" size={20} />;
      case 'admin':
        return <FiShield className="text-yellow-400" size={20} />;
      case 'data':
        return <FiDatabase className="text-green-400" size={20} />;
      default:
        return <FiFile className="text-gray-400" size={20} />;
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">System Logs / Audit Logs</h1>
          <button className="px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all flex items-center gap-2">
            <FiDownload size={20} />
            Export Logs
          </button>
        </div>

        {/* Filters */}
        <div className="glass p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search logs..."
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
            <div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="all">All Types</option>
                <option value="login">Login Logs</option>
                <option value="admin">Admin Actions</option>
                <option value="data">Data Access</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="glass p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-electric-blue/30">
                  <th className="text-left py-3 px-4 text-gray-400">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400">User</th>
                  <th className="text-left py-3 px-4 text-gray-400">Action</th>
                  <th className="text-left py-3 px-4 text-gray-400">IP Address</th>
                  <th className="text-left py-3 px-4 text-gray-400">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getIcon(log.type)}
                        <span className="capitalize text-white">{log.type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{log.user}</td>
                    <td className="py-3 px-4 text-white">{log.action}</td>
                    <td className="py-3 px-4 text-gray-400">{log.ip}</td>
                    <td className="py-3 px-4 text-gray-400">
                      {log.timestamp.toLocaleString()}
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

