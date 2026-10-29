import React from 'react';
import { StatItem } from '../types';
import { AnimatedNumber } from './AnimatedNumber';

interface StatCardProps {
  stat: StatItem;
  themeColor: 'amber' | 'emerald' | 'cyan' | 'blue' | 'rose';
  isTriggered: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, themeColor, isTriggered }) => {
  const colorClasses = {
    amber: {
      border: 'border-amber-200/90 hover:border-amber-400',
      bg: 'bg-amber-50/50 hover:bg-amber-50/90',
      text: 'text-amber-800',
      bar: 'bg-amber-500',
    },
    emerald: {
      border: 'border-emerald-200/90 hover:border-emerald-400',
      bg: 'bg-emerald-50/50 hover:bg-emerald-50/90',
      text: 'text-emerald-800',
      bar: 'bg-emerald-500',
    },
    cyan: {
      border: 'border-cyan-200/90 hover:border-cyan-400',
      bg: 'bg-cyan-50/50 hover:bg-cyan-50/90',
      text: 'text-cyan-800',
      bar: 'bg-cyan-500',
    },
    blue: {
      border: 'border-blue-200/90 hover:border-blue-400',
      bg: 'bg-blue-50/50 hover:bg-blue-50/90',
      text: 'text-blue-800',
      bar: 'bg-blue-500',
    },
    rose: {
      border: 'border-rose-200/90 hover:border-rose-400',
      bg: 'bg-rose-50/50 hover:bg-rose-50/90',
      text: 'text-rose-800',
      bar: 'bg-rose-500',
    },
  }[themeColor];

  return (
    <div className={`h-full flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border ${colorClasses.border} ${colorClasses.bg} transition-all duration-300 shadow-xs hover:shadow-sm min-w-0 overflow-hidden`}>
      {/* Label */}
      <div className="text-xs sm:text-sm font-semibold text-stone-700 leading-snug mb-1.5 break-words">
        {stat.label}
      </div>

      {/* Main Counter Number - Smaller Font Size to prevent overflow */}
      <div className={`text-xl sm:text-2xl lg:text-3xl font-extrabold ${colorClasses.text} tracking-tight my-1 min-w-0 overflow-hidden`}>
        <AnimatedNumber
          value={stat.value}
          decimals={stat.decimals || 0}
          prefix={stat.prefix}
          suffix={stat.suffix}
          unit={stat.unit}
          isTriggered={isTriggered}
        />
      </div>

      {/* Progress Bar for Percentages */}
      {stat.percentageValue !== undefined && (
        <div className="mt-2 w-full bg-stone-200/80 rounded-full h-1.5 overflow-hidden p-0.5 border border-stone-300/40">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClasses.bar}`}
            style={{ width: isTriggered ? `${Math.min(stat.percentageValue, 100)}%` : '0%' }}
          />
        </div>
      )}
    </div>
  );
};
