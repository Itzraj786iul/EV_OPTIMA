'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { FiFileText, FiDownload, FiFile } from 'react-icons/fi';

export default function Reports() {
  const handleDownload = (type: 'pdf' | 'csv') => {
    // Simulate download
    alert(`Downloading ${type.toUpperCase()} report...`);
  };

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Reports Export</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PDF Report */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-red-500/20 flex items-center justify-center">
                <FiFileText className="text-red-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">PDF Summary Report</h3>
                <p className="text-gray-400 text-sm">Comprehensive analytics report</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Download a detailed PDF report containing driver behavior analytics, EV health metrics,
              maintenance recommendations, and performance insights.
            </p>
            <button
              onClick={() => handleDownload('pdf')}
              className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center justify-center gap-2"
            >
              <FiDownload size={20} />
              Download PDF
            </button>
          </div>

          {/* CSV Report */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center">
                <FiFile className="text-green-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">CSV Analytics Data</h3>
                <p className="text-gray-400 text-sm">Raw telemetry data export</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Export all telemetry data, driver behavior metrics, and vehicle health data in CSV format
              for further analysis in external tools.
            </p>
            <button
              onClick={() => handleDownload('csv')}
              className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all flex items-center justify-center gap-2"
            >
              <FiDownload size={20} />
              Download CSV
            </button>
          </div>
        </div>

        {/* Report History */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Recent Reports</h3>
          <div className="space-y-3">
            {[
              { date: '2024-01-20', type: 'PDF', size: '2.4 MB' },
              { date: '2024-01-15', type: 'CSV', size: '1.8 MB' },
              { date: '2024-01-10', type: 'PDF', size: '2.1 MB' },
            ].map((report, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <FiFileText className="text-electric-blue" size={24} />
                  <div>
                    <p className="font-semibold text-white">{report.type} Report - {report.date}</p>
                    <p className="text-sm text-gray-400">{report.size}</p>
                  </div>
                </div>
                <button className="px-4 py-2 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

