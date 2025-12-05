import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiUser } from 'react-icons/fi';

const teamMembers = [
  'Milind Sen',
  'Raziullah Ansari',
  'Abdullah Shaikh',
  'Aman Kumar Sharma',
  'Saksham Tikariha',
];

export default function Team() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Team Tensor</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            The talented team behind EV-Optima
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl text-center hover:glow-blue transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center mx-auto mb-4">
                  <FiUser className="text-dark-bg" size={40} />
                </div>
                <h3 className="text-xl font-bold text-electric-blue">{member}</h3>
                <p className="text-gray-400 mt-2">Team Member</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass p-8 rounded-xl text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-electric-blue mb-4">About Team Tensor</h2>
            <p className="text-gray-300">
              Team Tensor is a group of passionate engineers and data scientists dedicated to revolutionizing
              electric vehicle telematics through AI and machine learning. Our mission is to make EV transportation
              safer, more efficient, and more sustainable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

