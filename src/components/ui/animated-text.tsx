"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'one' | 'two' | 'three' | 'four' | 'six' | 'seven';
  as?: React.ElementType;
  startDelay?: number;
}

export function AnimatedText({ text, className, animation = 'one', as: Component = 'div', startDelay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={cn("animated-text inline-block", isVisible ? animation : "opacity-0", className)}
      aria-label={text}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: isVisible ? `${startDelay + index * 0.05}s` : '0s' }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
}
