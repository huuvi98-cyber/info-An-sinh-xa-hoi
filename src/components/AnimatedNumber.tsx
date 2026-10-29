import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isTriggered?: boolean;
  className?: string;
  unit?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
  isTriggered = true,
  className = '',
  unit = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!isTriggered) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration, isTriggered]);

  const formatVietnameseNumber = (num: number, dec: number) => {
    const fixed = num.toFixed(dec);
    const [intPart, decPart] = fixed.split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return decPart !== undefined ? `${formattedInt},${decPart}` : formattedInt;
  };

  const isPercentUnit = unit === '%';

  return (
    <div className={`flex flex-wrap items-baseline gap-x-1 font-extrabold tracking-tight tabular-nums min-w-0 max-w-full ${className}`}>
      
      {/* Prefix rendered in smaller, quiet font size (e.g. 'Giảm gần ') */}
      {prefix && (
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-tight text-stone-600 mr-0.5 shrink-0">
          {prefix}
        </span>
      )}

      {/* Main number and % sign tightly bound in whitespace-nowrap to NEVER break lines */}
      <span className="whitespace-nowrap shrink-0">
        {formatVietnameseNumber(displayValue, decimals)}
        {suffix}
        {isPercentUnit && '%'}
      </span>

      {/* Other units like 'dự án', 'căn hộ', 'tỷ đồng' */}
      {unit && !isPercentUnit && (
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-normal text-stone-600 shrink-0">
          {unit}
        </span>
      )}
    </div>
  );
};
