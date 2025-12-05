'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { FiUpload, FiFile, FiDownload } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CSVUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    // Simulate ML prediction
    setTimeout(() => {
      const mockResult = {
        riskScore: Math.floor(Math.random() * 10) + 1,
        category: ['Good', 'Average', 'Bad'][Math.floor(Math.random() * 3)],
        featureImportance: [
          { feature: 'Harsh Braking', importance: 0.35 },
          { feature: 'Rapid Acceleration', importance: 0.28 },
          { feature: 'Overspeeding', importance: 0.22 },
          { feature: 'Steering Stability', importance: 0.15 },
        ],
        summary: {
          totalEvents: 156,
          harshBraking: 12,
          rapidAcceleration: 8,
          overspeeding: 5,
        },
      };
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Upload CSV for ML Prediction</h1>

        {/* Upload Section */}
        <div className="glass p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiUpload className="text-electric-blue" size={24} />
            <h2 className="text-xl font-bold text-electric-blue">Upload Telemetry CSV</h2>
          </div>

          <div className="border-2 border-dashed border-electric-blue/30 rounded-xl p-12 text-center mb-6">
            <FiFile className="text-electric-blue mx-auto mb-4" size={48} />
            <p className="text-gray-400 mb-4">
              {file ? file.name : 'Drag and drop your CSV file here, or click to browse'}
            </p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
              id="csv-upload"
            />
            <label
              htmlFor="csv-upload"
              className="inline-block px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all cursor-pointer"
            >
              Select File
            </label>
          </div>

          {file && (
            <button
              onClick={handleUpload}
              disabled={loading}
              className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Analyze with AI'}
            </button>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Risk Score Card */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-bold text-electric-blue mb-4">Prediction Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Risk Score</p>
                  <p className={`text-5xl font-bold ${
                    result.riskScore <= 3 ? 'text-green-400' :
                    result.riskScore <= 6 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {result.riskScore}/10
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Driver Category</p>
                  <p className={`text-4xl font-bold ${
                    result.category === 'Good' ? 'text-green-400' :
                    result.category === 'Average' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {result.category}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Total Events</p>
                  <p className="text-5xl font-bold text-white">{result.summary.totalEvents}</p>
                </div>
              </div>
            </div>

            {/* Feature Importance */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-bold text-electric-blue mb-4">Feature Importance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={result.featureImportance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="feature" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                  <Bar dataKey="importance" fill="#00E5FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Table */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-bold text-electric-blue mb-4">Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-electric-blue/30">
                      <th className="text-left py-3 px-4 text-gray-400">Metric</th>
                      <th className="text-right py-3 px-4 text-gray-400">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-white">Harsh Braking Events</td>
                      <td className="py-3 px-4 text-right text-electric-blue font-bold">{result.summary.harshBraking}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-white">Rapid Acceleration Events</td>
                      <td className="py-3 px-4 text-right text-electric-blue font-bold">{result.summary.rapidAcceleration}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-white">Overspeeding Events</td>
                      <td className="py-3 px-4 text-right text-electric-blue font-bold">{result.summary.overspeeding}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-end">
              <button className="px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all flex items-center gap-2">
                <FiDownload size={20} />
                Download Report
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

