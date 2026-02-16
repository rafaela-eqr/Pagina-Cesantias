
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface CalculationResult {
  estimatedCesantias: number;
  estimatedInterests: number;
  total: number;
}
