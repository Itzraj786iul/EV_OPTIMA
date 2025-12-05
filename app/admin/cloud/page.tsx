'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { FiCloud, FiWifi, FiDatabase, FiActivity, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export default function CloudMonitoring() {
  const [devices, setDevices] = useState([
    { id: 'DEV-001', status: 'online', lastSync: new Date(), dataIngestion: 95 },
    { id: 'DEV-002', status: 'online', lastSync: new Date(Date.now() - 300000), dataIngestion: 87 },
    { id: 'DEV-003', status: 'offline', lastSync: new Date(Date.now() - 3600000), dataIngestion: 0 },
    { id: 'DEV-004', status: 'online', lastSync: new Date(), dataIngestion: 92 },
  ]);

  const [apiUsage, setApiUsage] = useState({
    requests: 125000,
    rate: 145,
    errors: 12,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setApiUsage((prev: typeof apiUsage) => ({
        requests: prev.requests + Math.floor(Math.random() * 10),
        rate: 100 + Math.floor(Math.random() * 100),
        errors: prev.errors + (Math.random() > 0.9 ? 1 : 0),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Cloud Device Status Monitoring</h1>

        {/* API Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-electric-blue" size={24} />
              <p className="text-gray-400 text-sm">API Requests</p>
            </div>
            <p className="text-3xl font-bold text-white">{apiUsage.requests.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">Total requests today</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-green-400" size={24} />
              <p className="text-gray-400 text-sm">Request Rate</p>
            </div>
            <p className="text-3xl font-bold text-white">{apiUsage.rate}/min</p>
            <p className="text-sm text-gray-500 mt-1">Current rate</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiXCircle className="text-red-400" size={24} />
              <p className="text-gray-400 text-sm">Errors</p>
            </div>
            <p className="text-3xl font-bold text-white">{apiUsage.errors}</p>
            <p className="text-sm text-gray-500 mt-1">Error count</p>
          </div>
        </div>

        {/* Device Status */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiCloud className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Device Connectivity</h2>
          </div>
          <div className="space-y-4">
            {devices.map((device: typeof devices[0]) => (
              <div key={device.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    device.status === 'online' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {device.status === 'online' ? (
                      <FiCheckCircle className="text-green-400" size={24} />
                    ) : (
                      <FiXCircle className="text-red-400" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{device.id}</h3>
                    <p className="text-sm text-gray-400">
                      Last sync: {device.lastSync.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      device.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {device.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiDatabase className="text-electric-blue" size={16} />
                    <span className="text-sm text-gray-400">
                      Data Ingestion: {device.dataIngestion}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Ingestion Status */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiDatabase className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Data Ingestion Status</h2>
          </div>
          <div className="space-y-4">
            {devices.map((device: typeof devices[0]) => (
              <div key={device.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">{device.id}</span>
                  <span className="text-electric-blue font-bold">{device.dataIngestion}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      device.dataIngestion > 90
                        ? 'bg-gradient-to-r from-green-500 to-green-400'
                        : device.dataIngestion > 70
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                        : 'bg-gradient-to-r from-red-500 to-red-400'
                    }`}
                    style={{ width: `${device.dataIngestion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

