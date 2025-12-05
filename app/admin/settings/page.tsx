'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { FiSettings, FiUsers, FiTruck, FiSave, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    systemName: 'EV-Optima',
    maxUsers: 1000,
    dataRetentionDays: 365,
  });

  const [users] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  ]);

  const [vehicles] = useState([
    { id: 'EV-001', model: 'Tesla Model 3' },
    { id: 'EV-002', model: 'Ather 450X' },
  ]);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Admin Settings</h1>

        {/* System Configuration */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiSettings className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">System Configuration</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">System Name</label>
              <input
                type="text"
                value={settings.systemName}
                onChange={(e) => setSettings({ ...settings, systemName: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Users</label>
              <input
                type="number"
                value={settings.maxUsers}
                onChange={(e) => setSettings({ ...settings, maxUsers: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Data Retention (Days)</label>
              <input
                type="number"
                value={settings.dataRetentionDays}
                onChange={(e) => setSettings({ ...settings, dataRetentionDays: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FiUsers className="text-electric-blue" size={24} />
              <h2 className="text-xl font-bold text-electric-blue">Manage Users</h2>
            </div>
            <button className="px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center gap-2">
              <FiPlus size={16} />
              Add User
            </button>
          </div>
          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-xs font-semibold capitalize">
                    {user.role}
                  </span>
                  <button className="p-2 glass border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Vehicle Management */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FiTruck className="text-electric-blue" size={24} />
              <h2 className="text-xl font-bold text-electric-blue">Fleet Vehicles</h2>
            </div>
            <button className="px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center gap-2">
              <FiPlus size={16} />
              Add Vehicle
            </button>
          </div>
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="font-semibold text-white">{vehicle.id}</p>
                  <p className="text-sm text-gray-400">{vehicle.model}</p>
                </div>
                <button className="p-2 glass border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all">
                  <FiTrash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center gap-2"
          >
            <FiSave size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

