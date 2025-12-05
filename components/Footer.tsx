import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-electric-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center">
                <span className="text-sm font-bold text-dark-bg">EV</span>
              </div>
              <span className="text-lg font-bold gradient-text">EV-Optima</span>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered telematics control system for electric vehicles.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-electric-blue mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-electric-blue transition-colors">Features</Link></li>
              <li><Link href="/architecture" className="hover:text-electric-blue transition-colors">Architecture</Link></li>
              <li><Link href="/demo" className="hover:text-electric-blue transition-colors">Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-electric-blue mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/team" className="hover:text-electric-blue transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-electric-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-electric-blue mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-electric-blue/20 text-center text-sm text-gray-400">
          <p>&copy; 2024 EV-Optima. All rights reserved. Team Tensor.</p>
        </div>
      </div>
    </footer>
  );
}

