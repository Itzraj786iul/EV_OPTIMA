'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { FiTool, FiAlertTriangle, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const maintenanceAlerts = [
  {
    id: '1',
    type: 'Cooling System',
    severity: 'high',
    message: 'Cooling system stress detected — service in 4 days',
    daysRemaining: 4,
    status: 'pending',
  },
  {
    id: '2',
    type: 'Battery Cell',
    severity: 'medium',
    message: 'Battery cell imbalance detected — check voltage spread',
    daysRemaining: 7,
    status: 'pending',
  },
  {
    id: '3',
    type: 'Motor',
    severity: 'low',
    message: 'Motor wear detected — schedule inspection in 30 days',
    daysRemaining: 30,
    status: 'pending',
  },
  {
    id: '4',
    type: 'Brake System',
    severity: 'low',
    message: 'Routine brake inspection due in 45 days',
    daysRemaining: 45,
    status: 'scheduled',
  },
];

export default function PredictiveMaintenance() {
  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Predictive Maintenance</h1>

        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiTool className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">AI-Generated Maintenance Recommendations</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Our AI analyzes vehicle telemetry data to predict maintenance needs before failures occur.
          </p>

          <div className="space-y-4">
            {maintenanceAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-6 rounded-xl border ${
                  alert.severity === 'high'
                    ? 'bg-red-500/10 border-red-500/30'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      alert.severity === 'high' ? 'bg-red-500/20' :
                      alert.severity === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                    }`}>
                      <FiAlertTriangle className={
                        alert.severity === 'high' ? 'text-red-400' :
                        alert.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                      } size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{alert.type}</h3>
                      <p className="text-sm text-gray-400">{alert.message}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-lg text-xs font-semibold mb-2 ${
                      alert.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FiCalendar size={16} />
                      <span>{alert.daysRemaining} days</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button className="px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all">
                    Schedule Service
                  </button>
                  <button className="px-4 py-2 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all">
                    View Details
                  </button>
                  {alert.status === 'scheduled' && (
                    <div className="flex items-center gap-2 text-green-400">
                      <FiCheckCircle size={16} />
                      <span className="text-sm">Scheduled</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance History */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Recent Maintenance</h3>
          <div className="space-y-3">
            {[
              { date: '2024-01-15', service: 'Battery Health Check', status: 'completed' },
              { date: '2024-01-01', service: 'Routine Inspection', status: 'completed' },
              { date: '2023-12-15', service: 'Cooling System Service', status: 'completed' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="font-semibold text-white">{item.service}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FiCheckCircle size={16} />
                  <span className="text-sm">Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

