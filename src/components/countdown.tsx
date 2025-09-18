"use client";
import { useState, useEffect, useCallback } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

type Props = {
  targetDate: Date;
};

export default function Countdown({ targetDate }: Props) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <NumberFlowGroup>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] text-center border border-white/20 flex-1 max-w-[120px] sm:max-w-none sm:flex-initial"
          >
            <div
              style={{
                fontVariantNumeric: "tabular-nums",
                "--number-flow-char-height": "0.85em",
              } as React.CSSProperties}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2"
            >
              <NumberFlow
                trend={-1}
                value={unit.value}
                format={{ minimumIntegerDigits: 2 }}
              />
            </div>
            <div className="text-white/80 text-xs sm:text-sm font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </NumberFlowGroup>
  );
}
