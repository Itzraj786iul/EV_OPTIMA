'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FiHome,
  FiBarChart2,
  FiBattery,
  FiTool,
  FiBell,
  FiUpload,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiUser,
  FiTruck,
  FiUsers,
  FiMap,
  FiShield,
  FiCloud,
  FiFile,
  FiActivity,
} from 'react-icons/fi';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'user' | 'admin';
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const userMenuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: FiHome },
    { href: '/dashboard/behavior', label: 'Driver Analytics', icon: FiBarChart2 },
    { href: '/dashboard/health', label: 'EV Health', icon: FiBattery },
    { href: '/dashboard/maintenance', label: 'Maintenance', icon: FiTool },
    { href: '/dashboard/alerts', label: 'Alerts', icon: FiBell },
    { href: '/dashboard/upload', label: 'Upload CSV', icon: FiUpload },
    { href: '/dashboard/reports', label: 'Reports', icon: FiFileText },
    { href: '/dashboard/settings', label: 'Settings', icon: FiSettings },
  ];

  const adminMenuItems = [
    { href: '/admin', label: 'Dashboard', icon: FiHome },
    { href: '/admin/fleet', label: 'Fleet Overview', icon: FiTruck },
    { href: '/admin/vehicles', label: 'Vehicle Registry', icon: FiMap },
    { href: '/admin/drivers', label: 'Driver Management', icon: FiUsers },
    { href: '/admin/telematics', label: 'Telematics Studio', icon: FiActivity },
    { href: '/admin/fraud', label: 'Fraud Detection', icon: FiShield },
    { href: '/admin/cloud', label: 'Cloud Monitoring', icon: FiCloud },
    { href: '/admin/logs', label: 'System Logs', icon: FiFile },
    { href: '/admin/settings', label: 'Settings', icon: FiSettings },
  ];

  const menuItems = role === 'admin' ? adminMenuItems : userMenuItems;

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 glass-strong border-r border-electric-blue/20 overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-electric-blue/20">
            <div className="flex items-center justify-between">
              <Link href={role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center">
                  <span className="text-sm font-bold text-dark-bg">EV</span>
                </div>
                <span className="text-lg font-bold gradient-text">EV-Optima</span>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-gray-400 hover:text-electric-blue"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-electric-blue'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-electric-blue/20">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all"
            >
              <FiLogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="glass-strong border-b border-electric-blue/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-300 hover:text-electric-blue md:hidden"
            >
              <FiMenu size={24} />
            </button>
            <div className="flex items-center space-x-4 ml-auto">
              <div className="text-right">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400 capitalize">{role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center">
                <FiUser className="text-dark-bg" size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

