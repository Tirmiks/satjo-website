'use client';

import React, { useEffect, useRef, useState } from 'react';


interface ScrollRevealProps {
  children: React.ReactNode;
}

export default function ScrollAnim({ children }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}