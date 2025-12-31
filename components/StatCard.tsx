"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedNumber from "./AnimatedNumber";

interface StatCardProps {
  value: number | string;
  description: string;
  delay?: number;
}

export default function StatCard({ value, description, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 text-center">
        <div className="font-bricolage-grotesque text-4xl md:text-5xl font-bold text-black mb-3">
          <AnimatedNumber value={value} isVisible={isVisible} />
        </div>
        <p className="font-bricolage-grotesque text-base md:text-lg text-black">
          {description}
        </p>
      </div>
    </div>
  );
}
