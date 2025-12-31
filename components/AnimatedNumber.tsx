"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

export default function AnimatedNumber({ 
  value, 
  suffix = "", 
  duration = 2500,
  isVisible 
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState<number | string>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^\d.]/g, "")) : value;
    
    if (isNaN(numericValue)) {
      setDisplayValue(value as any);
      return;
    }

    hasAnimatedRef.current = true;
    setIsAnimating(true);
    const endValue = numericValue;
    const maxValue = Math.max(endValue * 1.5, 1000); // Go beyond target for lottery effect
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Lottery effect: fast spinning at start, slow down near end
      let easeProgress;
      if (progress < 0.7) {
        // Fast spinning phase (70% of animation)
        easeProgress = progress / 0.7;
        const spinValue = maxValue * (1 - Math.pow(1 - easeProgress, 2));
        const currentValue = Math.floor(spinValue);
        
        if (typeof value === "string" && value.includes("%")) {
          setDisplayValue((currentValue % 100).toString() + "%");
        } else {
          setDisplayValue(currentValue);
        }
      } else {
        // Slow down phase (last 30%)
        const slowProgress = (progress - 0.7) / 0.3;
        const easeOut = 1 - Math.pow(1 - slowProgress, 3);
        const currentValue = maxValue * 0.7 + (endValue - maxValue * 0.7) * easeOut;
        
        if (typeof value === "string" && value.includes("%")) {
          setDisplayValue(Math.round(currentValue).toString() + "%");
        } else {
          const formatted = Math.round(currentValue).toLocaleString("fr-FR");
          setDisplayValue(formatted);
        }
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure final value is correct
        if (typeof value === "string" && value.includes("%")) {
          setDisplayValue(Math.round(endValue).toString() + "%");
        } else {
          const formatted = Math.round(endValue).toLocaleString("fr-FR");
          setDisplayValue(formatted);
        }
        setIsAnimating(false);
        startTimeRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, value, duration]);

  return <span>{displayValue}{suffix}</span>;
}
