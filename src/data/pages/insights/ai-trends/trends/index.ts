// To add a new AI Trend:
//   1. Create a new file in this folder, e.g. ./my-new-trend.ts, exporting a
//      single `trend: AITrendItem` (see trendTypes.ts for the shape, and any
//      existing file here for a full example).
//   2. Import it below and add it to the array.

import { AITrendItem } from '../trendTypes';
import { trend as gpt6AstraAgiEra } from './gpt-6-astra-agi-era';

export const trends: AITrendItem[] = [
  gpt6AstraAgiEra,
];
