'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Get in touch with Team Tensor
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-electric-blue mb-6">Send us a message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-electric-blue text-2xl font-bold mb-2">Message Sent!</div>
                  <div className="text-gray-400">We'll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                    <FiMail className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-electric-blue">Email</h3>
                    <p className="text-gray-400">contact@ev-optima.com</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                    <FiPhone className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-electric-blue">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                    <FiMapPin className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-electric-blue">Address</h3>
                    <p className="text-gray-400">123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

