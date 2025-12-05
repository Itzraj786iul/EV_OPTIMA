import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiCpu, FiCloud, FiDatabase, FiBarChart2, FiWifi, FiShield } from 'react-icons/fi';

export default function Architecture() {
  const components = [
    {
      icon: FiWifi,
      title: 'Sensors & TCU/OBD-II',
      description: 'Vehicle sensors collect real-time data including speed, acceleration, braking force, battery voltage, current, temperature, and GPS coordinates.',
      position: 'left',
    },
    {
      icon: FiCpu,
      title: 'Edge AI Module',
      description: 'On-board processing unit runs lightweight ML models for immediate anomaly detection, risk scoring, and critical alert generation. Reduces latency and cloud dependency.',
      position: 'right',
    },
    {
      icon: FiWifi,
      title: 'MQTT Communication',
      description: 'Lightweight messaging protocol ensures reliable, real-time data transmission from vehicles to cloud infrastructure with minimal bandwidth usage.',
      position: 'left',
    },
    {
      icon: FiCloud,
      title: 'Cloud Server & Data Lake',
      description: 'Scalable cloud infrastructure stores historical telemetry data, runs complex ML models, manages user authentication, and serves dashboard APIs.',
      position: 'right',
    },
    {
      icon: FiDatabase,
      title: 'ML Models',
      description: 'Advanced machine learning models for driver profiling, battery health prediction, failure forecasting, fraud detection, and fleet optimization.',
      position: 'left',
    },
    {
      icon: FiBarChart2,
      title: 'Dashboards',
      description: 'Role-based dashboards for drivers, fleet managers, OEMs, and insurers. Real-time visualizations, alerts, reports, and actionable insights.',
      position: 'right',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">System Architecture</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            End-to-end telematics infrastructure from vehicle sensors to AI-powered dashboards.
          </p>

          {/* Architecture Flow Diagram */}
          <div className="glass p-8 rounded-xl mb-16">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
              {['TCU/OBD-II', 'Edge AI', 'MQTT', 'Cloud', 'ML Models', 'Dashboards'].map((stage, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="px-4 py-2 bg-electric-blue/20 border border-electric-blue/50 rounded-lg text-electric-blue font-semibold text-sm md:text-base">
                    {stage}
                  </div>
                  {idx < 5 && (
                    <div className="mx-2 text-electric-blue hidden md:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-gray-400">
              <p>Real-time data flow from vehicle to insights</p>
            </div>
          </div>

          {/* Component Details */}
          <div className="space-y-8">
            {components.map((component, idx) => {
              const Icon = component.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    component.position === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-electric-blue/20 flex items-center justify-center glow-blue">
                      <Icon className="text-electric-blue" size={40} />
                    </div>
                  </div>
                  <div className="flex-1 glass p-6 rounded-xl">
                    <h2 className="text-2xl font-bold text-electric-blue mb-3">{component.title}</h2>
                    <p className="text-gray-300">{component.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Security & Scalability */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <FiShield className="text-electric-blue" size={32} />
                <h3 className="text-xl font-bold text-electric-blue">Security</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• End-to-end encryption</li>
                <li>• Secure authentication</li>
                <li>• Role-based access control</li>
                <li>• Audit logging</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <FiCloud className="text-electric-blue" size={32} />
                <h3 className="text-xl font-bold text-electric-blue">Scalability</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Cloud-native architecture</li>
                <li>• Auto-scaling infrastructure</li>
                <li>• Distributed processing</li>
                <li>• Multi-tenant support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

