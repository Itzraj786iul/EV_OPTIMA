'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiActivity, FiBattery, FiAlertCircle } from 'react-icons/fi';

export default function Demo() {
  const [scenario, setScenario] = useState<'good' | 'average' | 'bad' | null>(null);
  const [riskScore, setRiskScore] = useState(5);
  const [batteryHealth, setBatteryHealth] = useState(87);
  const [telemetryData, setTelemetryData] = useState<any[]>([]);

  useEffect(() => {
    if (!scenario) return;

    const interval = setInterval(() => {
      const baseValues = {
        good: { risk: 2, battery: 90, speed: 45, braking: 0.2, accel: 1.5 },
        average: { risk: 5, battery: 85, speed: 60, braking: 0.8, accel: 3.2 },
        bad: { risk: 8, battery: 75, speed: 85, braking: 2.5, accel: 6.8 },
      };

      const base = baseValues[scenario];
      const variation = (Math.random() - 0.5) * 2;

      setRiskScore(Math.max(1, Math.min(10, base.risk + variation)));
      setBatteryHealth(Math.max(70, Math.min(95, base.battery + variation * 2)));

      setTelemetryData((prev) => {
        const newData = {
          time: new Date().toLocaleTimeString(),
          speed: base.speed + variation * 5,
          braking: Math.max(0, base.braking + variation * 0.3),
          acceleration: Math.max(0, base.accel + variation * 0.5),
          batteryTemp: 35 + variation * 3,
        };
        return [...prev.slice(-9), newData];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [scenario]);

  const speedData = telemetryData.map((d, i) => ({ name: d.time, speed: d.speed }));
  const behaviorData = scenario
    ? [
        { name: 'Harsh Braking', value: telemetryData[telemetryData.length - 1]?.braking || 0 },
        { name: 'Rapid Accel', value: telemetryData[telemetryData.length - 1]?.acceleration || 0 },
      ]
    : [];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Live Demo</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Experience real-time telematics analysis and AI predictions.
          </p>

          {/* Scenario Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'good', label: 'Good Driver', color: 'green' },
              { id: 'average', label: 'Average Driver', color: 'yellow' },
              { id: 'bad', label: 'Bad Driver', color: 'red' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => {
                  setScenario(btn.id as any);
                  setTelemetryData([]);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  scenario === btn.id
                    ? `bg-${btn.color}-500 text-white glow-blue`
                    : 'glass border border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {scenario && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Risk Score Gauge */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-electric-blue mb-4 flex items-center gap-2">
                  <FiActivity /> Driver Risk Score
                </h3>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">{riskScore.toFixed(1)}</div>
                    <div className="text-gray-400">
                      {riskScore <= 3 ? 'Good' : riskScore <= 6 ? 'Average' : 'Bad'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Battery Health */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-electric-blue mb-4 flex items-center gap-2">
                  <FiBattery /> Battery Health
                </h3>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">{batteryHealth.toFixed(1)}%</div>
                    <div className="text-gray-400">State of Health</div>
                  </div>
                </div>
              </div>

              {/* Speed Chart */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-electric-blue mb-4">Speed (km/h)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={speedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                    <Line type="monotone" dataKey="speed" stroke="#00E5FF" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Behavior Chart */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-electric-blue mb-4">Driving Behavior</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={behaviorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                    <Bar dataKey="value" fill="#00E5FF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Live Telemetry */}
              <div className="glass p-6 rounded-xl lg:col-span-2">
                <h3 className="text-xl font-bold text-electric-blue mb-4 flex items-center gap-2">
                  <FiAlertCircle /> Live Telemetry Data
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {telemetryData.length > 0 && (
                    <>
                      <div>
                        <div className="text-sm text-gray-400">Speed</div>
                        <div className="text-2xl font-bold text-electric-blue">
                          {telemetryData[telemetryData.length - 1].speed.toFixed(1)} km/h
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Braking</div>
                        <div className="text-2xl font-bold text-electric-blue">
                          {telemetryData[telemetryData.length - 1].braking.toFixed(2)} g
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Acceleration</div>
                        <div className="text-2xl font-bold text-electric-blue">
                          {telemetryData[telemetryData.length - 1].acceleration.toFixed(2)} g
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Battery Temp</div>
                        <div className="text-2xl font-bold text-electric-blue">
                          {telemetryData[telemetryData.length - 1].batteryTemp.toFixed(1)}°C
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {!scenario && (
            <div className="glass p-12 rounded-xl text-center">
              <p className="text-gray-400 text-lg">Select a driver scenario to start the demo</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

