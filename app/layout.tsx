import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EV-Optima - AI-Powered Telematics Control System',
  description: 'Transforming EV safety, performance, and reliability using real-time telemetry and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

