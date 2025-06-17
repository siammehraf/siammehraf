import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(GSAPSplitText);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  interval = 8000, // new prop: how often to re-run the animation (ms)
}) => {
  const ref = useRef(null);
  const splitterRef = useRef(null);
  const targetsRef = useRef([]);
  const intervalIdRef = useRef(null);

  const animate = () => {
    const el = ref.current;
    if (!el) return;

    if (splitterRef.current) {
      splitterRef.current.revert();
    }

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      linesClass: 'split-line',
    });

    splitterRef.current = splitter;

    let targets;
    switch (splitType) {
      case 'lines':
        targets = splitter.lines;
        break;
      case 'words':
        targets = splitter.words;
        break;
      case 'words, chars':
        targets = [...splitter.words, ...splitter.chars];
        break;
      default:
        targets = splitter.chars;
    }

    targetsRef.current = targets;

    gsap.set(targets, { ...from });

    gsap.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });
  };

  useEffect(() => {
    animate(); // Run immediately

    intervalIdRef.current = setInterval(() => {
      animate();
    }, interval);

    return () => {
      clearInterval(intervalIdRef.current);
      if (splitterRef.current) {
        splitterRef.current.revert();
      }
      gsap.killTweensOf(targetsRef.current);
    };
  }, [text, delay, duration, ease, from, to, splitType, interval]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}>
      {text}
    </p>
  );
};

export default SplitText;
