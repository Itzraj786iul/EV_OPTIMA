'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { FiUser, FiLock, FiBell, FiTruck, FiSave } from 'react-icons/fi';

export default function Settings() {
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    vehicle: {
      model: 'Tesla Model 3',
      vin: '5YJ3E1EA1KF123456',
    },
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Settings</h1>

        {/* Profile Settings */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiUser className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Profile Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Password Settings */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiLock className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Password</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
              <input
                type="password"
                value={settings.password}
                onChange={(e) => setSettings({ ...settings, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                placeholder="Enter new password"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiBell className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Notification Preferences</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-gray-300 capitalize">{key} Notifications</label>
                <button
                  onClick={() => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, [key]: !value },
                  })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    value ? 'bg-electric-blue' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiTruck className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Linked Vehicle</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Model</label>
              <input
                type="text"
                value={settings.vehicle.model}
                onChange={(e) => setSettings({
                  ...settings,
                  vehicle: { ...settings.vehicle, model: e.target.value },
                })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">VIN</label>
              <input
                type="text"
                value={settings.vehicle.vin}
                onChange={(e) => setSettings({
                  ...settings,
                  vehicle: { ...settings.vehicle, vin: e.target.value },
                })}
                className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>
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

