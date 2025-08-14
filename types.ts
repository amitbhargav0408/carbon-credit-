
export interface CarbonCreditProject {
  id: string;
  name: string;
  type: 'Forestry' | 'Renewable Energy' | 'Methane Capture' | 'Industrial Efficiency';
  source: string;
  vintage: number;
  pricePerTonne: number;
  availableTonnes: number;
}

export interface ScoreItem {
  category: string;
  score: number;
  color: string;
}
