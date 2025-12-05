'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { generateTelemetryData } from '@/lib/mockData';
import { FiFilter, FiDownload } from 'react-icons/fi';
import { LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

export default function TelematicsStudio() {
  const [filters, setFilters] = useState({
    vehicle: 'all',
    driver: 'all',
    dateRange: '7d',
    eventType: 'all',
  });

  // Generate mock telemetry data
  const telemetryData = Array.from({ length: 50 }, () => generateTelemetryData());
  const timeSeriesData = telemetryData.map((d, i) => ({
    time: i,
    speed: d.speed,
    acceleration: d.acceleration,
    braking: d.braking,
  }));

  const scatterData = telemetryData.map((d) => ({
    speed: d.speed,
    acceleration: d.acceleration,
    braking: d.braking,
  }));

  const anomalyData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    anomalies: Math.floor(Math.random() * 10),
  }));

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">Real-Time Telematics Analytics Studio</h1>
          <button className="px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all flex items-center gap-2">
            <FiDownload size={20} />
            Export Data
          </button>
        </div>

        {/* Filters */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <FiFilter className="text-electric-blue" size={20} />
            <h3 className="text-lg font-bold text-electric-blue">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle</label>
              <select
                value={filters.vehicle}
                onChange={(e) => setFilters({ ...filters, vehicle: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="all">All Vehicles</option>
                <option value="EV-001">EV-001</option>
                <option value="EV-002">EV-002</option>
                <option value="EV-003">EV-003</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Driver</label>
              <select
                value={filters.driver}
                onChange={(e) => setFilters({ ...filters, driver: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="all">All Drivers</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="mike">Mike Johnson</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="1d">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Event Type</label>
              <select
                value={filters.eventType}
                onChange={(e) => setFilters({ ...filters, eventType: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="all">All Events</option>
                <option value="braking">Harsh Braking</option>
                <option value="acceleration">Rapid Acceleration</option>
                <option value="overspeeding">Overspeeding</option>
              </select>
            </div>
          </div>
        </div>

        {/* Time Series Chart */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Time Series Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              <Line type="monotone" dataKey="speed" stroke="#00E5FF" name="Speed (km/h)" />
              <Line type="monotone" dataKey="acceleration" stroke="#17E9FF" name="Acceleration (g)" />
              <Line type="monotone" dataKey="braking" stroke="#FF00E5" name="Braking (g)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Scatter Plot */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Speed vs Acceleration</h3>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" dataKey="speed" name="Speed" stroke="#999" />
              <YAxis type="number" dataKey="acceleration" name="Acceleration" stroke="#999" />
              <ZAxis type="number" dataKey="braking" range={[50, 400]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              <Scatter name="Telemetry" data={scatterData} fill="#00E5FF" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Anomaly Detection Heatmap */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Anomaly Detection Heatmap</h3>
          <div className="grid grid-cols-12 gap-2">
            {anomalyData.map((item, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`h-16 rounded-lg flex items-center justify-center text-xs font-semibold ${
                    item.anomalies === 0 ? 'bg-green-500/20 text-green-400' :
                    item.anomalies < 3 ? 'bg-yellow-500/20 text-yellow-400' :
                    item.anomalies < 6 ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}
                >
                  {item.anomalies}
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.hour}h</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500/20 rounded" />
              <span>0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500/20 rounded" />
              <span>1-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500/20 rounded" />
              <span>3-5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500/20 rounded" />
              <span>6+</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

