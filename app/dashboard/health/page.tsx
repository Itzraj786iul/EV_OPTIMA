'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockBatteryHealth } from '@/lib/mockData';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiBattery, FiThermometer, FiZap, FiActivity } from 'react-icons/fi';

export default function EVHealth() {
  const [battery, setBattery] = useState(mockBatteryHealth);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery((prev) => {
        const newBattery = {
          ...prev,
          soh: Math.max(70, prev.soh - Math.random() * 0.01),
          temperature: 30 + Math.random() * 15,
          voltage: 350 + Math.random() * 50,
          current: 30 + Math.random() * 30,
        };
        setHistory((prev) => [
          ...prev.slice(-19),
          {
            time: new Date().toLocaleTimeString(),
            soh: newBattery.soh,
            temp: newBattery.temperature,
            voltage: newBattery.voltage,
          },
        ]);
        return newBattery;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sohColor = battery.soh > 80 ? 'text-green-400' : battery.soh > 60 ? 'text-yellow-400' : 'text-red-400';

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold gradient-text">EV Health Monitoring</h1>

        {/* Battery SOH */}
        <div className="glass p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-electric-blue flex items-center gap-2">
              <FiBattery /> Battery State of Health
            </h2>
            <div className="text-right">
              <p className={`text-4xl font-bold ${sohColor}`}>{battery.soh.toFixed(1)}%</p>
              <p className="text-sm text-gray-400">Remaining Life: {battery.remainingLife} days</p>
            </div>
          </div>
          <div className="w-full bg-white/5 rounded-full h-6 mb-4">
            <div
              className={`h-6 rounded-full transition-all ${
                battery.soh > 80
                  ? 'bg-gradient-to-r from-green-500 to-green-400'
                  : battery.soh > 60
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                  : 'bg-gradient-to-r from-red-500 to-red-400'
              }`}
              style={{ width: `${battery.soh}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-gray-400 text-sm">Degradation Risk</p>
              <p className="text-lg font-bold text-white">{battery.degradationProbability.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Next 72 Hours</p>
              <p className="text-lg font-bold text-white">Low</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Charging Cycles</p>
              <p className="text-lg font-bold text-white">{battery.chargingCycles}</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                <FiZap className="text-electric-blue" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Voltage</p>
                <p className="text-2xl font-bold text-white">{battery.voltage.toFixed(1)}V</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                <FiActivity className="text-electric-blue" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Current</p>
                <p className="text-2xl font-bold text-white">{battery.current.toFixed(1)}A</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                <FiThermometer className="text-electric-blue" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Temperature</p>
                <p className="text-2xl font-bold text-white">{battery.temperature.toFixed(1)}°C</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                <FiThermometer className="text-electric-blue" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Motor Temp</p>
                <p className="text-2xl font-bold text-white">{battery.motorTemperature.toFixed(1)}°C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">SOH Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={history}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#999" />
                <YAxis stroke="#999" domain={[70, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                <Area type="monotone" dataKey="soh" stroke="#00E5FF" fill="#00E5FF" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-electric-blue mb-4">Temperature & Voltage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00E5FF' }} />
                <Line type="monotone" dataKey="temp" stroke="#00E5FF" name="Temperature (°C)" />
                <Line type="monotone" dataKey="voltage" stroke="#17E9FF" name="Voltage (V)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Thermal Runaway Risk */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-electric-blue mb-4">Thermal Runaway Risk Indicator</h3>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Risk Level</span>
                <span className={`font-bold ${
                  battery.thermalRunawayRisk < 30 ? 'text-green-400' :
                  battery.thermalRunawayRisk < 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {battery.thermalRunawayRisk}%
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all ${
                    battery.thermalRunawayRisk < 30
                      ? 'bg-green-500'
                      : battery.thermalRunawayRisk < 60
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${battery.thermalRunawayRisk}%` }}
                />
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Status</p>
              <p className={`text-lg font-bold ${
                battery.thermalRunawayRisk < 30 ? 'text-green-400' :
                battery.thermalRunawayRisk < 60 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {battery.thermalRunawayRisk < 30 ? 'Safe' :
                 battery.thermalRunawayRisk < 60 ? 'Caution' : 'Warning'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

