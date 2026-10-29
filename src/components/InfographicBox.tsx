import React from 'react';
import { SOCIAL_PILLARS } from '../data/socialSecurityData';
import { PillarCard } from './PillarCard';

export const InfographicBox: React.FC = () => {
  const housingPillar = SOCIAL_PILLARS.find((p) => p.id === 'housing');
  const financialPillar = SOCIAL_PILLARS.find((p) => p.id === 'financial-support');
  const healthcarePillar = SOCIAL_PILLARS.find((p) => p.id === 'healthcare');
  const incomePillar = SOCIAL_PILLARS.find((p) => p.id === 'income-welfare');
  const disasterPillar = SOCIAL_PILLARS.find((p) => p.id === 'disaster-protection');

  return (
    <div 
      className="relative min-h-screen py-8 px-3 sm:px-4 md:px-6 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url('/assets/aistudio/blue-texture_bf4409fa.jpg')` }}
    >
      {/* Subtle overlay for legibility and tone */}
      <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px] pointer-events-none" />

      {/* 1400px container layout */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto space-y-6">
        
        {/* Header Tít chung */}
        <header className="py-2 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white font-serif-editorial uppercase leading-tight drop-shadow-md">
            An sinh xã hội - đích đến của mọi quyết sách
          </h1>
        </header>

        {/* Row 1: An cư - nhà ở xã hội (Full Width) */}
        {housingPillar && (
          <PillarCard pillar={housingPillar} isTriggered={true} />
        )}

        {/* Row 2: Hỗ trợ tài chính (Bên trái) | Chăm sóc sức khỏe (Bên phải) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {financialPillar && (
            <div className="lg:col-span-5 h-full flex flex-col">
              <PillarCard pillar={financialPillar} isTriggered={true} />
            </div>
          )}
          {healthcarePillar && (
            <div className="lg:col-span-7 h-full flex flex-col">
              <PillarCard pillar={healthcarePillar} isTriggered={true} />
            </div>
          )}
        </div>

        {/* Row 3: Nâng cao thu nhập và phúc lợi (Rộng) | Ứng phó thiên tai (Nhỏ lại) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {incomePillar && (
            <div className="lg:col-span-7 xl:col-span-8 h-full flex flex-col">
              <PillarCard pillar={incomePillar} isTriggered={true} />
            </div>
          )}
          {disasterPillar && (
            <div className="lg:col-span-5 xl:col-span-4 h-full flex flex-col">
              <PillarCard pillar={disasterPillar} isTriggered={true} />
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
