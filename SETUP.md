# EV-Optima Setup Instructions

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages
  - `/` - Home page
  - `/features` - Features page
  - `/architecture` - System architecture page
  - `/demo` - Interactive demo page
  - `/team` - Team page
  - `/contact` - Contact page
  - `/login` - Login page
  - `/signup` - Signup page
  - `/forgot-password` - Password reset page
  - `/dashboard` - User dashboard pages
  - `/admin` - Admin dashboard pages

- `/components` - Reusable React components
  - `Navbar.tsx` - Navigation bar for public pages
  - `Footer.tsx` - Footer component
  - `DashboardLayout.tsx` - Layout for dashboard pages

- `/lib` - Utilities and helpers
  - `utils.ts` - Utility functions
  - `mockData.ts` - Mock data for simulations

- `/types` - TypeScript type definitions

## Features

✅ All public pages (Home, Features, Architecture, Demo, Team, Contact)
✅ Authentication pages (Login, Signup, Forgot Password)
✅ User dashboard with all components
✅ Admin dashboard with all components
✅ Dark futuristic theme
✅ Responsive design
✅ Interactive charts and visualizations
✅ Simulated real-time data

## Notes

- The website uses simulated data for demonstrations
- All dashboards are fully functional with mock data
- Charts animate and update in real-time
- The design follows a dark futuristic theme with electric blue/cyan accents

