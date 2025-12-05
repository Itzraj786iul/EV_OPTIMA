'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { mockFleetKPI, mockVehicles } from '@/lib/mockData';
import { FiTruck, FiMapPin, FiActivity } from 'react-icons/fi';

export default function FleetOverview() {
  const kpi = mockFleetKPI;
  const vehicles = mockVehicles;

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Fleet Overview</h1>

        {/* Fleet Map Placeholder */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiMapPin className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Fleet Map</h2>
          </div>
          <div className="h-96 bg-white/5 rounded-lg flex items-center justify-center border border-electric-blue/30">
            <div className="text-center">
              <FiMapPin className="text-electric-blue mx-auto mb-4" size={48} />
              <p className="text-gray-400">Interactive fleet map with vehicle locations</p>
              <p className="text-sm text-gray-500 mt-2">Click on vehicle pins to view details</p>
            </div>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="glass p-6 rounded-xl hover:glow-blue transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{vehicle.id}</h3>
                <div className={`w-3 h-3 rounded-full ${
                  vehicle.healthScore > 80 ? 'bg-green-400' :
                  vehicle.healthScore > 60 ? 'bg-yellow-400' : 'bg-red-400'
                }`} />
              </div>
              <p className="text-gray-400 mb-4">{vehicle.model}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Health Score</span>
                  <span className={`font-bold ${
                    vehicle.healthScore > 80 ? 'text-green-400' :
                    vehicle.healthScore > 60 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {vehicle.healthScore}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Driver</span>
                  <span className="text-white">{vehicle.assignedDriver}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Faults</span>
                  <span className="text-white">
                    {vehicle.faultPredictions[0] === 'None' ? 'None' : vehicle.faultPredictions.length}
                  </span>
                </div>
              </div>
              {vehicle.faultPredictions[0] !== 'None' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-400">
                    {vehicle.faultPredictions.join(', ')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fleet Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiTruck className="text-electric-blue" size={24} />
              <p className="text-gray-400 text-sm">Total Vehicles</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.totalEVs}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-green-400" size={24} />
              <p className="text-gray-400 text-sm">Average Health</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.averageFleetHealth.toFixed(1)}%</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-yellow-400" size={24} />
              <p className="text-gray-400 text-sm">Predicted Failures</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.predictedFailures}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiActivity className="text-red-400" size={24} />
              <p className="text-gray-400 text-sm">High-Risk Drivers</p>
            </div>
            <p className="text-3xl font-bold text-white">{kpi.highRiskDrivers}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

