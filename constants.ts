
import { CarbonCreditProject, ScoreItem } from './types';

export const MOCK_PROJECTS: CarbonCreditProject[] = [
  { id: 'ccp-001', name: 'Amazon Rainforest Reforestation', type: 'Forestry', source: 'Verra VCS', vintage: 2023, pricePerTonne: 18.50, availableTonnes: 15000 },
  { id: 'ccp-002', name: 'Gobi Desert Solar Farm', type: 'Renewable Energy', source: 'Gold Standard', vintage: 2024, pricePerTonne: 25.00, availableTonnes: 32000 },
  { id: 'ccp-003', name: 'Ontario Landfill Gas Capture', type: 'Methane Capture', source: 'CAR', vintage: 2023, pricePerTonne: 15.75, availableTonnes: 8500 },
  { id: 'ccp-004', name: 'Indian Cement Plant Efficiency', type: 'Industrial Efficiency', source: 'Verra VCS', vintage: 2022, pricePerTonne: 12.20, availableTonnes: 45000 },
  { id: 'ccp-005', name: 'Congo Basin Forest Preservation', type: 'Forestry', source: 'Gold Standard', vintage: 2024, pricePerTonne: 21.80, availableTonnes: 22000 },
];

export const MARKET_GROWTH_DATA = [
    { year: 2023, value: 90 },
    { year: 2024, value: 150 },
    { year: 2025, value: 250 },
    { year: 2026, value: 375 },
    { year: 2027, value: 483 },
];

export const CREDIT_PRICE_DATA = [
    { month: 'Jan', price: 14.5 },
    { month: 'Feb', price: 15.2 },
    { month: 'Mar', price: 16.1 },
    { month: 'Apr', price: 15.8 },
    { month: 'May', price: 17.5 },
    { month: 'Jun', price: 18.2 },
];

export const SCORING_DATA: ScoreItem[] = [
    { category: 'Market Potential', score: 8, color: '#34D399' },
    { category: 'Technical Feasibility', score: 7, color: '#60A5FA' },
    { category: 'Differentiation', score: 6, color: '#FBBF24' },
];
