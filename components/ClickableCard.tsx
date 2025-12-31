"use client";

import { useEffect, useRef, useState } from "react";

interface ClickableCardProps {
  children: React.ReactNode;
  delay?: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function ClickableCard({ children, delay = 0, isSelected, onClick }: ClickableCardProps) {
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
      className={`transition-all duration-700 ease-out cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div
        className={`rounded-2xl p-4 md:p-5 transition-all duration-300 ${
          isSelected
            ? "border-2 border-green-500 bg-green-50"
            : "border border-gray-300 bg-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
