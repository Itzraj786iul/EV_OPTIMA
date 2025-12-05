export type UserRole = 'user' | 'admin' | 'insurer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
}

export interface DriverProfile {
  id: string;
  name: string;
  riskScore: number;
  category: 'Good' | 'Average' | 'Bad';
  harshBraking: number;
  rapidAcceleration: number;
  overspeeding: number;
  steeringStability: number;
  smoothnessScore: number;
}

export interface BatteryHealth {
  soh: number; // State of Health %
  voltage: number;
  current: number;
  temperature: number;
  thermalRunawayRisk: number;
  motorTemperature: number;
  chargingCycles: number;
  remainingLife: number; // days
  degradationProbability: number; // %
}

export interface Vehicle {
  id: string;
  model: string;
  healthScore: number;
  faultPredictions: string[];
  assignedDriver: string;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface MaintenanceAlert {
  id: string;
  type: 'safety' | 'battery' | 'driver' | 'maintenance';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

export interface TelemetryData {
  timestamp: Date;
  speed: number;
  acceleration: number;
  braking: number;
  batteryTemp: number;
  voltage: number;
  current: number;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface FleetKPI {
  totalEVs: number;
  highRiskDrivers: number;
  averageFleetHealth: number;
  predictedFailures: number;
  warrantyRiskScore: number;
}

export interface FraudDetection {
  claimId: string;
  description: string;
  telemetryMatchScore: number;
  fraudLikelihood: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface CSVUploadResult {
  riskScore: number;
  category: 'Good' | 'Average' | 'Bad';
  featureImportance: Array<{
    feature: string;
    importance: number;
  }>;
  summary: {
    totalEvents: number;
    harshBraking: number;
    rapidAcceleration: number;
    overspeeding: number;
  };
}

