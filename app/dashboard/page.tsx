'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockDrivers, mockBatteryHealth, mockAlerts } from '@/lib/mockData';
import { getRiskCategory } from '@/lib/utils';
import { FiShield, FiBattery, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function UserDashboard() {
  const [driver] = useState(mockDrivers[0]);
  const [battery, setBattery] = useState(mockBatteryHealth);
  const [alerts] = useState(mockAlerts);

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery((prev) => ({
        ...prev,
        soh: Math.max(70, prev.soh - Math.random() * 0.01),
        temperature: 30 + Math.random() * 15,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const behaviorData = [
    { name: 'Harsh Braking', value: driver.harshBraking },
    { name: 'Rapid Accel', value: driver.rapidAcceleration },
    { name: 'Overspeeding', value: driver.overspeeding },
  ];

  const radarData = [
    { subject: 'Braking', A: 10 - driver.harshBraking, fullMark: 10 },
    { subject: 'Acceleration', A: 10 - driver.rapidAcceleration / 2, fullMark: 10 },
    { subject: 'Speed Control', A: 10 - driver.overspeeding, fullMark: 10 },
    { subject: 'Steering', A: driver.steeringStability, fullMark: 10 },
    { subject: 'Smoothness', A: driver.smoothnessScore, fullMark: 10 },
  ];

  const riskColor = driver.riskScore <= 3 ? 'text-green-400' : driver.riskScore <= 6 ? 'text-yellow-400' : 'text-red-400';
  const category = getRiskCategory(driver.riskScore);

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>

        {/* Driver Summary Card */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-electric-blue flex items-center gap-2">
              <FiShield /> Driver Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 mb-1">Driver Name</p>
              <p className="text-2xl font-bold text-white">{driver.name}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Today's Risk Score</p>
              <p className={`text-4xl font-bold ${riskColor}`}>{driver.riskScore}/10</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Category</p>
              <p className={`text-2xl font-bold ${riskColor}`}>{category}</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Behavior Chart */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Driving Behavior</h3>
            <BarChart width={400} height={250} data={behaviorData}>
              <Bar dataKey="value" fill="#00E5FF" />
            </BarChart>
          </div>

          {/* Radar Chart */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Performance Radar</h3>
            <RadarChart width={400} height={250} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 10]} />
              <Radar name="Score" dataKey="A" stroke="#00E5FF" fill="#00E5FF" fillOpacity={0.6} />
            </RadarChart>
          </div>
        </div>

        {/* EV Health & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* EV Health */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4 flex items-center gap-2">
              <FiBattery /> EV Health Monitoring
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">State of Health (SOH)</span>
                  <span className="text-electric-blue font-bold">{battery.soh.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-electric-blue to-neon-cyan h-3 rounded-full transition-all"
                    style={{ width: `${battery.soh}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Voltage</p>
                  <p className="text-xl font-bold text-white">{battery.voltage.toFixed(1)}V</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Current</p>
                  <p className="text-xl font-bold text-white">{battery.current.toFixed(1)}A</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Temperature</p>
                  <p className="text-xl font-bold text-white">{battery.temperature.toFixed(1)}°C</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Charging Cycles</p>
                  <p className="text-xl font-bold text-white">{battery.chargingCycles}</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-yellow-400">
                  Thermal Runaway Risk: {battery.thermalRunawayRisk}%
                </p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4 flex items-center gap-2">
              <FiAlertCircle /> Alerts & Notifications
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${
                    alert.severity === 'critical'
                      ? 'bg-red-500/10 border-red-500/30'
                      : alert.severity === 'high'
                      ? 'bg-orange-500/10 border-orange-500/30'
                      : alert.severity === 'medium'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{alert.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded capitalize ${
                      alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      alert.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

