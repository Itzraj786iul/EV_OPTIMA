'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { mockDrivers } from '@/lib/mockData';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

export default function DriverBehavior() {
  const driver = mockDrivers[0];

  const behaviorData = [
    { name: 'Harsh Braking', value: driver.harshBraking, max: 30 },
    { name: 'Rapid Acceleration', value: driver.rapidAcceleration, max: 30 },
    { name: 'Overspeeding', value: driver.overspeeding, max: 30 },
  ];

  const timelineData = [
    { date: 'Mon', braking: 2, acceleration: 1, overspeeding: 0 },
    { date: 'Tue', braking: 1, acceleration: 1, overspeeding: 1 },
    { date: 'Wed', braking: 0, acceleration: 0, overspeeding: 0 },
    { date: 'Thu', braking: 3, acceleration: 2, overspeeding: 1 },
    { date: 'Fri', braking: 2, acceleration: 1, overspeeding: 0 },
    { date: 'Sat', braking: 1, acceleration: 1, overspeeding: 0 },
    { date: 'Sun', braking: 0, acceleration: 0, overspeeding: 0 },
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Driver Behavior Analytics</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">Harsh Braking</p>
            <p className="text-3xl font-bold text-white">{driver.harshBraking}</p>
            <p className="text-xs text-gray-500 mt-1">events today</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">Rapid Acceleration</p>
            <p className="text-3xl font-bold text-white">{driver.rapidAcceleration}</p>
            <p className="text-xs text-gray-500 mt-1">events today</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">Overspeeding</p>
            <p className="text-3xl font-bold text-white">{driver.overspeeding}</p>
            <p className="text-xs text-gray-500 mt-1">events today</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">Smoothness Score</p>
            <p className="text-3xl font-bold text-electric-blue">{driver.smoothnessScore.toFixed(1)}</p>
            <p className="text-xs text-gray-500 mt-1">out of 10</p>
          </div>
        </div>

        {/* Behavior Chart */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Behavior Events</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={behaviorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              <Bar dataKey="value" fill="#00E5FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Timeline Chart */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Weekly Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
              <Legend />
              <Line type="monotone" dataKey="braking" stroke="#00E5FF" name="Harsh Braking" />
              <Line type="monotone" dataKey="acceleration" stroke="#17E9FF" name="Rapid Accel" />
              <Line type="monotone" dataKey="overspeeding" stroke="#FF00E5" name="Overspeeding" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Steering Stability</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Index</span>
                  <span className="text-electric-blue font-bold">{driver.steeringStability.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-electric-blue to-neon-cyan h-3 rounded-full"
                    style={{ width: `${driver.steeringStability * 10}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Overall Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Risk Score</span>
                <span className="text-white font-bold">{driver.riskScore}/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Category</span>
                <span className="text-electric-blue font-bold">
                  {driver.riskScore <= 3 ? 'Good' : driver.riskScore <= 6 ? 'Average' : 'Bad'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Trend</span>
                <div className="flex items-center gap-1 text-green-400">
                  <FiTrendingDown size={16} />
                  <span className="font-bold">Improving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

