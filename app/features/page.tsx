import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiShield, FiCpu, FiBattery, FiTool, FiShieldOff, FiMap, FiTrendingDown } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: FiShield,
      title: 'Driver Behavior Analysis',
      description: 'Advanced AI algorithms analyze driving patterns including harsh braking, rapid acceleration, overspeeding, and steering stability. Generate comprehensive driver risk scores and behavioral insights.',
      details: [
        'Real-time risk scoring (1-10 scale)',
        'Driver categorization (Good/Average/Bad)',
        'Behavioral pattern recognition',
        'Personalized coaching recommendations',
      ],
    },
    {
      icon: FiCpu,
      title: 'Edge + Cloud AI',
      description: 'Hybrid AI architecture with edge processing for real-time decisions and cloud-based deep learning for complex analytics. Ensures low latency and high accuracy.',
      details: [
        'Edge AI for instant alerts',
        'Cloud ML for predictive analytics',
        'Federated learning support',
        'Scalable infrastructure',
      ],
    },
    {
      icon: FiBattery,
      title: 'Battery Health Intelligence',
      description: 'Digital twin technology monitors battery state of health, predicts degradation, detects thermal runaway risks, and optimizes charging patterns for maximum lifespan.',
      details: [
        'State of Health (SOH) tracking',
        'Thermal runaway prediction',
        'Cell imbalance detection',
        'Remaining life estimation',
      ],
    },
    {
      icon: FiTool,
      title: 'Predictive Maintenance Scheduling',
      description: 'AI-powered maintenance recommendations based on component wear patterns, usage data, and failure predictions. Schedule service before critical failures occur.',
      details: [
        'Component-level predictions',
        'Maintenance cost optimization',
        'Downtime minimization',
        'Service scheduling automation',
      ],
    },
    {
      icon: FiShieldOff,
      title: 'Warranty & Fraud Detection',
      description: 'Analyze telemetry data to detect fraudulent warranty claims and insurance fraud. Match claim descriptions with actual vehicle behavior and TCU logs.',
      details: [
        'Telemetry-claim matching',
        'Fraud likelihood scoring',
        'Historical pattern analysis',
        'Automated flagging system',
      ],
    },
    {
      icon: FiMap,
      title: 'Live Fleet Monitoring',
      description: 'Real-time fleet overview with vehicle locations, health status, driver assignments, and operational KPIs. Comprehensive dashboard for fleet managers.',
      details: [
        'Real-time vehicle tracking',
        'Fleet health dashboard',
        'Driver-vehicle assignment',
        'Operational analytics',
      ],
    },
    {
      icon: FiTrendingDown,
      title: 'Sustainability Metrics',
      description: 'Track and optimize carbon footprint, energy consumption, and environmental impact. Generate sustainability reports for compliance and optimization.',
      details: [
        'CO2 emission tracking',
        'Energy efficiency metrics',
        'Sustainability reporting',
        'Green fleet optimization',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Features</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions for electric vehicle telematics and fleet management.
          </p>

          <div className="space-y-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass p-8 rounded-xl hover:glow-blue transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-electric-blue/20 flex items-center justify-center">
                        <Icon className="text-electric-blue" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-electric-blue mb-4">{feature.title}</h2>
                      <p className="text-gray-300 mb-4 text-lg">{feature.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {feature.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-2 text-gray-400">
                            <span className="text-electric-blue mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

