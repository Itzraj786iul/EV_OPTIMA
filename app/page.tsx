import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiArrowRight, FiShield, FiBattery, FiTool, FiBell, FiTruck, FiTrendingDown } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">EV-Optima</span>
            <br />
            <span className="text-white">AI-Driven Telematics Control System</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transforming EV safety, performance, and reliability using real-time telemetry and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-8 py-4 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all"
            >
              Sign Up
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all flex items-center justify-center gap-2"
            >
              Explore Demo <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Problems We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Battery Failures', desc: 'Predict and prevent costly battery degradation' },
              { title: 'Driver Risk', desc: 'Identify and mitigate high-risk driving behaviors' },
              { title: 'Downtime', desc: 'Minimize vehicle downtime with predictive maintenance' },
              { title: 'Warranty Fraud', desc: 'Detect fraudulent warranty claims using telemetry' },
            ].map((problem, idx) => (
              <div key={idx} className="glass p-6 rounded-xl hover:glow-blue transition-all">
                <h3 className="text-xl font-semibold text-electric-blue mb-2">{problem.title}</h3>
                <p className="text-gray-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-electric-blue/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FiShield, title: 'Driver Profiling', desc: 'AI-powered driver behavior analysis and risk scoring' },
              { icon: FiBattery, title: 'Battery Digital Twin', desc: 'Real-time battery health monitoring and life prediction' },
              { icon: FiTool, title: 'Predictive Maintenance', desc: 'Schedule maintenance before failures occur' },
              { icon: FiBell, title: 'Real-Time Alerts', desc: 'Instant notifications for safety and health issues' },
              { icon: FiTruck, title: 'Fleet Optimization', desc: 'Optimize fleet operations with data-driven insights' },
              { icon: FiTrendingDown, title: 'CO2 Reduction', desc: 'Track and reduce carbon footprint' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass p-6 rounded-xl hover:glow-blue transition-all">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center mb-4">
                    <Icon className="text-electric-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Architecture Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">System Architecture</h2>
          <div className="glass p-8 rounded-xl">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {['TCU/OBD-II', 'Edge AI', 'MQTT', 'Cloud Server', 'ML Models', 'Dashboards'].map((component, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="px-6 py-3 bg-electric-blue/20 border border-electric-blue/50 rounded-lg text-electric-blue font-semibold">
                    {component}
                  </div>
                  {idx < 5 && (
                    <div className="mx-2 text-electric-blue">
                      <FiArrowRight />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/architecture"
                className="text-electric-blue hover:text-neon-cyan font-semibold flex items-center justify-center gap-2"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-electric-blue/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: '40%', label: 'Reduction in Battery Failures' },
              { value: '35%', label: 'Lower Maintenance Costs' },
              { value: '50%', label: 'Fewer Accidents' },
              { value: '25%', label: 'CO2 Reduction' },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-6 rounded-xl text-center hover:glow-blue transition-all">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

