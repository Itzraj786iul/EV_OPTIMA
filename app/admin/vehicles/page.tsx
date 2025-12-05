'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockVehicles } from '@/lib/mockData';
import { FiSearch, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

export default function VehicleRegistry() {
  const [vehicles] = useState(mockVehicles);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter((v) =>
    v.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.assignedDriver.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">Vehicle Registry</h1>
          <button className="px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center gap-2">
            <FiPlus size={20} />
            Add Vehicle
          </button>
        </div>

        {/* Search */}
        <div className="glass p-4 rounded-xl">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
            />
          </div>
        </div>

        {/* Vehicle Table */}
        <div className="glass p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-electric-blue/30">
                  <th className="text-left py-3 px-4 text-gray-400">Vehicle ID</th>
                  <th className="text-left py-3 px-4 text-gray-400">Model</th>
                  <th className="text-left py-3 px-4 text-gray-400">Health Score</th>
                  <th className="text-left py-3 px-4 text-gray-400">Fault Predictions</th>
                  <th className="text-left py-3 px-4 text-gray-400">Assigned Driver</th>
                  <th className="text-left py-3 px-4 text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
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
                    <td className="py-3 px-4">
                      {vehicle.faultPredictions[0] === 'None' ? (
                        <span className="text-green-400">None</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {vehicle.faultPredictions.map((fault, idx) => (
                            <span key={idx} className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">
                              {fault}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-300">{vehicle.assignedDriver}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 glass border border-electric-blue/50 text-electric-blue rounded-lg hover:bg-electric-blue/10 transition-all">
                          <FiEdit size={16} />
                        </button>
                        <button className="p-2 glass border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all">
                          <FiTrash2 size={16} />
                        </button>
                      </div>
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

