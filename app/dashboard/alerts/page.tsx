'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockAlerts } from '@/lib/mockData';
import { FiBell, FiAlertCircle, FiShield, FiBattery, FiUser, FiX } from 'react-icons/fi';

export default function Alerts() {
  const [alerts, setAlerts] = useState(mockAlerts);

  const handleAcknowledge = (id: string) => {
    setAlerts((prev) => prev.map((alert) =>
      alert.id === id ? { ...alert, acknowledged: true } : alert
    ));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'safety':
        return <FiShield className="text-red-400" size={20} />;
      case 'battery':
        return <FiBattery className="text-yellow-400" size={20} />;
      case 'driver':
        return <FiUser className="text-blue-400" size={20} />;
      default:
        return <FiAlertCircle className="text-orange-400" size={20} />;
    }
  };

  const alertsByType = {
    safety: alerts.filter((a) => a.type === 'safety'),
    battery: alerts.filter((a) => a.type === 'battery'),
    driver: alerts.filter((a) => a.type === 'driver'),
    maintenance: alerts.filter((a) => a.type === 'maintenance'),
  };

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Alerts & Notifications</h1>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiBell className="text-electric-blue" size={24} />
              <p className="text-gray-400">Total Alerts</p>
            </div>
            <p className="text-3xl font-bold text-white">{alerts.length}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiShield className="text-red-400" size={24} />
              <p className="text-gray-400">Safety</p>
            </div>
            <p className="text-3xl font-bold text-white">{alertsByType.safety.length}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiBattery className="text-yellow-400" size={24} />
              <p className="text-gray-400">Battery</p>
            </div>
            <p className="text-3xl font-bold text-white">{alertsByType.battery.length}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiUser className="text-blue-400" size={24} />
              <p className="text-gray-400">Driver</p>
            </div>
            <p className="text-3xl font-bold text-white">{alertsByType.driver.length}</p>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`glass p-6 rounded-xl border ${
                alert.severity === 'critical'
                  ? 'bg-red-500/10 border-red-500/30'
                  : alert.severity === 'high'
                  ? 'bg-orange-500/10 border-orange-500/30'
                  : alert.severity === 'medium'
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-blue-500/10 border-blue-500/30'
              } ${alert.acknowledged ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">{getIcon(alert.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{alert.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        alert.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 rounded text-xs bg-white/10 text-gray-400 capitalize">
                        {alert.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{alert.message}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                {!alert.acknowledged && (
                  <button
                    onClick={() => handleAcknowledge(alert.id)}
                    className="px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all"
                  >
                    Acknowledge
                  </button>
                )}
                {alert.acknowledged && (
                  <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold">
                    Acknowledged
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

