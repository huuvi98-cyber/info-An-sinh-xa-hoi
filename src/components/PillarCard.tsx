import React from 'react';
import { SocialPillar } from '../types';
import { StatCard } from './StatCard';
import { Home, CreditCard, HeartPulse, TrendingUp, ShieldCheck, FileText } from 'lucide-react';

interface PillarCardProps {
  pillar: SocialPillar;
  isTriggered: boolean;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, isTriggered }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 lg:w-6 lg:h-6" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 lg:w-6 lg:h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 lg:w-6 lg:h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />;
      default: return <FileText className="w-5 h-5 lg:w-6 lg:h-6" />;
    }
  };

  const themeColor = pillar.colorTheme.accent as 'amber' | 'emerald' | 'cyan' | 'blue' | 'rose';

  const colorStyles = {
    amber: {
      headerBg: 'bg-gradient-to-r from-amber-100/80 via-amber-50/60 to-transparent',
      border: 'border-amber-200',
      iconContainer: 'bg-amber-100 text-amber-900 border-amber-300',
      titleText: 'text-amber-950',
    },
    emerald: {
      headerBg: 'bg-gradient-to-r from-emerald-100/80 via-emerald-50/60 to-transparent',
      border: 'border-emerald-200',
      iconContainer: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      titleText: 'text-emerald-950',
    },
    cyan: {
      headerBg: 'bg-gradient-to-r from-cyan-100/80 via-cyan-50/60 to-transparent',
      border: 'border-cyan-200',
      iconContainer: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      titleText: 'text-cyan-950',
    },
    blue: {
      headerBg: 'bg-gradient-to-r from-blue-100/80 via-blue-50/60 to-transparent',
      border: 'border-blue-200',
      iconContainer: 'bg-blue-100 text-blue-900 border-blue-300',
      titleText: 'text-blue-950',
    },
    rose: {
      headerBg: 'bg-gradient-to-r from-rose-100/80 via-rose-50/60 to-transparent',
      border: 'border-rose-200',
      iconContainer: 'bg-rose-100 text-rose-900 border-rose-300',
      titleText: 'text-rose-950',
    },
  }[themeColor];

  const getGridCols = (count: number) => {
    switch (count) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-3';
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5';
    }
  };

  return (
    <section className={`h-full flex flex-col justify-between rounded-2xl border ${colorStyles.border} bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden min-w-0`}>
      {/* Header */}
      <div className={`p-4 sm:p-5 border-b border-stone-100 ${colorStyles.headerBg} flex items-center gap-3 shrink-0`}>
        <div className={`p-2 rounded-xl border ${colorStyles.iconContainer}`}>
          {getIcon(pillar.iconName)}
        </div>
        <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${colorStyles.titleText}`}>
          {pillar.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 space-y-5 flex-1 flex flex-col justify-between min-w-0">
        
        {/* Prose text */}
        <p className="text-stone-800 leading-relaxed text-sm sm:text-base font-normal">
          {pillar.fullText}
        </p>

        {/* Stat boxes */}
        <div className={`grid gap-3.5 items-stretch min-w-0 w-full ${getGridCols(pillar.keyStats.length)}`}>
          {pillar.keyStats.map((stat) => (
            <div key={stat.id} className="min-w-0 w-full">
              <StatCard
                stat={stat}
                themeColor={themeColor}
                isTriggered={isTriggered}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
