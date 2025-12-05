import { DriverProfile, BatteryHealth, Vehicle, MaintenanceAlert, FleetKPI, TelemetryData } from '@/types';

export const mockDrivers: DriverProfile[] = [
  {
    id: '1',
    name: 'John Doe',
    riskScore: 2,
    category: 'Good',
    harshBraking: 3,
    rapidAcceleration: 2,
    overspeeding: 1,
    steeringStability: 8.5,
    smoothnessScore: 9.2,
  },
  {
    id: '2',
    name: 'Jane Smith',
    riskScore: 5,
    category: 'Average',
    harshBraking: 12,
    rapidAcceleration: 8,
    overspeeding: 5,
    steeringStability: 6.2,
    smoothnessScore: 6.8,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    riskScore: 8,
    category: 'Bad',
    harshBraking: 25,
    rapidAcceleration: 18,
    overspeeding: 15,
    steeringStability: 4.1,
    smoothnessScore: 4.5,
  },
];

export const mockBatteryHealth: BatteryHealth = {
  soh: 87.5,
  voltage: 380.2,
  current: 45.8,
  temperature: 35.2,
  thermalRunawayRisk: 15,
  motorTemperature: 42.1,
  chargingCycles: 1247,
  remainingLife: 1825,
  degradationProbability: 12.5,
};

export const mockVehicles: Vehicle[] = [
  {
    id: 'EV-001',
    model: 'Tesla Model 3',
    healthScore: 92,
    faultPredictions: ['None'],
    assignedDriver: 'John Doe',
    location: { lat: 28.6139, lng: 77.2090 },
  },
  {
    id: 'EV-002',
    model: 'Ather 450X',
    healthScore: 78,
    faultPredictions: ['Cooling system stress', 'Battery cell imbalance'],
    assignedDriver: 'Jane Smith',
    location: { lat: 28.7041, lng: 77.1025 },
  },
  {
    id: 'EV-003',
    model: 'Ola S1 Pro',
    healthScore: 65,
    faultPredictions: ['High thermal risk', 'Motor wear detected'],
    assignedDriver: 'Mike Johnson',
    location: { lat: 28.5355, lng: 77.3910 },
  },
];

export const mockAlerts: MaintenanceAlert[] = [
  {
    id: '1',
    type: 'battery',
    severity: 'high',
    title: 'Battery Cell Imbalance Detected',
    message: 'Voltage spread exceeds threshold. Check battery cells in 4 days.',
    timestamp: new Date(),
    acknowledged: false,
  },
  {
    id: '2',
    type: 'maintenance',
    severity: 'medium',
    title: 'Cooling System Stress',
    message: 'Cooling system showing elevated stress. Service recommended in 7 days.',
    timestamp: new Date(Date.now() - 3600000),
    acknowledged: false,
  },
  {
    id: '3',
    type: 'driver',
    severity: 'low',
    title: 'Harsh Braking Pattern',
    message: 'Increased harsh braking events detected. Driver coaching recommended.',
    timestamp: new Date(Date.now() - 7200000),
    acknowledged: true,
  },
];

export const mockFleetKPI: FleetKPI = {
  totalEVs: 156,
  highRiskDrivers: 23,
  averageFleetHealth: 82.5,
  predictedFailures: 8,
  warrantyRiskScore: 15.2,
};

export function generateTelemetryData(): TelemetryData {
  return {
    timestamp: new Date(),
    speed: Math.random() * 80 + 20,
    acceleration: Math.random() * 5,
    braking: Math.random() * 3,
    batteryTemp: Math.random() * 20 + 30,
    voltage: Math.random() * 50 + 350,
    current: Math.random() * 30 + 30,
    location: {
      lat: 28.6139 + (Math.random() - 0.5) * 0.1,
      lng: 77.2090 + (Math.random() - 0.5) * 0.1,
    },
  };
}

