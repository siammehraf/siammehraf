'use client';
import React from 'react';
import SplitText from '@/app/components/SplitText';

export default function SplitTextIntro() {
  return (
    <SplitText
      text="Hello, I'm Siam Mehraf"
      className="big-bold-text"
      delay={80}
      duration={0.6}
      interval={8000} // <-- re-animate every 3 seconds
      splitType="words, chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      textAlign="center"
    />
  );
}
