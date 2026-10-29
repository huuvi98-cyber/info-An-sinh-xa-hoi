export interface StatItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  unit?: string;
  description?: string;
  badge?: string;
  highlightText?: string;
  type?: 'number' | 'percentage' | 'currency' | 'people' | 'reduction';
  percentageValue?: number; // 0-100 for progress bars
  trend?: {
    direction: 'up' | 'down';
    text: string;
  };
}

export interface SocialPillar {
  id: string;
  number: string; // '01', '02', etc.
  title: string;
  shortTitle: string;
  iconName: string;
  colorTheme: {
    accent: string;       // e.g. 'emerald'
    bgGradient: string;
    textAccent: string;
    border: string;
    badgeBg: string;
    progressFill: string;
  };
  keyStats: StatItem[];
  fullText: string;
  policyNote?: string;
}
