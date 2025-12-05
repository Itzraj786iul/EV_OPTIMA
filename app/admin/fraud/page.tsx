'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { FiShield, FiFileText, FiAlertTriangle } from 'react-icons/fi';

const fraudCases = [
  {
    id: 'F-001',
    claimDescription: 'Battery failure - sudden degradation',
    telemetryMatchScore: 15,
    fraudLikelihood: 92,
    status: 'pending',
    date: '2024-01-20',
  },
  {
    id: 'F-002',
    claimDescription: 'Motor overheating - warranty claim',
    telemetryMatchScore: 78,
    fraudLikelihood: 25,
    status: 'approved',
    date: '2024-01-18',
  },
  {
    id: 'F-003',
    claimDescription: 'Brake system failure',
    telemetryMatchScore: 12,
    fraudLikelihood: 88,
    status: 'pending',
    date: '2024-01-15',
  },
  {
    id: 'F-004',
    claimDescription: 'Battery cell replacement',
    telemetryMatchScore: 85,
    fraudLikelihood: 18,
    status: 'approved',
    date: '2024-01-12',
  },
];

export default function FraudDetection() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Warranty & Insurance Fraud Detection</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiShield className="text-electric-blue" size={24} />
              <p className="text-gray-400 text-sm">Total Claims</p>
            </div>
            <p className="text-3xl font-bold text-white">{fraudCases.length}</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiAlertTriangle className="text-red-400" size={24} />
              <p className="text-gray-400 text-sm">High Risk</p>
            </div>
            <p className="text-3xl font-bold text-white">
              {fraudCases.filter((c) => c.fraudLikelihood > 70).length}
            </p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiShield className="text-green-400" size={24} />
              <p className="text-gray-400 text-sm">Approved</p>
            </div>
            <p className="text-3xl font-bold text-white">
              {fraudCases.filter((c) => c.status === 'approved').length}
            </p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FiAlertTriangle className="text-yellow-400" size={24} />
              <p className="text-gray-400 text-sm">Pending</p>
            </div>
            <p className="text-3xl font-bold text-white">
              {fraudCases.filter((c) => c.status === 'pending').length}
            </p>
          </div>
        </div>

        {/* Fraud Cases */}
        <div className="space-y-4">
          {fraudCases.map((case_) => (
            <div
              key={case_.id}
              className={`glass p-6 rounded-xl border ${
                case_.fraudLikelihood > 70
                  ? 'bg-red-500/10 border-red-500/30'
                  : case_.fraudLikelihood > 40
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-green-500/10 border-green-500/30'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">Claim {case_.id}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      case_.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {case_.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{case_.claimDescription}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Telemetry Match</p>
                      <p className="text-xl font-bold text-electric-blue">{case_.telemetryMatchScore}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Fraud Likelihood</p>
                      <p className={`text-xl font-bold ${
                        case_.fraudLikelihood > 70 ? 'text-red-400' :
                        case_.fraudLikelihood > 40 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {case_.fraudLikelihood}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Date</p>
                      <p className="text-lg font-semibold text-white">{case_.date}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center gap-2">
                  <FiFileText size={16} />
                  Open Full TCU Logs
                </button>
                {case_.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 glass border border-green-500/50 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all">
                      Approve
                    </button>
                    <button className="px-4 py-2 glass border border-red-500/50 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all">
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

