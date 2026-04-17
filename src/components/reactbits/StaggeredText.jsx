import { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

const directionMap = {
  top: { x: 0, y: 28 },
  bottom: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

function splitText(text, segmentBy, separator) {
  const rows = separator ? text.split(separator) : [text];

  return rows.map((row) => {
    if (segmentBy === 'chars') {
      return row.split('').map((segment) => (segment === ' ' ? '\u00A0' : segment));
    }

    return row.split(' ').map((segment, index, segments) =>
      index === segments.length - 1 ? segment : `${segment}\u00A0`
    );
  });
}

export function StaggeredText({
  as: Tag = 'p',
  text,
  className = '',
  segmentBy = 'words',
  separator,
  delay = 80,
  duration = 0.6,
  direction = 'top',
  blur = true,
  triggerOnMount = false,
}) {
  const ref = useRef(null);
  const rows = useMemo(
    () => splitText(text, segmentBy, separator),
    [segmentBy, separator, text]
  );

  useLayoutEffect(() => {
    if (!ref.current) return;

    const segments = ref.current.querySelectorAll('[data-stagger-segment]');
    const offset = directionMap[direction] || directionMap.top;
    let observer;

    const play = () => {
      gsap.fromTo(
        segments,
        {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          filter: blur ? 'blur(10px)' : 'blur(0px)',
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          duration,
          stagger: delay / 1000,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    };

    if (triggerOnMount) {
      play();
      return undefined;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer?.disconnect();
  }, [blur, delay, direction, duration, triggerOnMount]);

  return (
    <Tag ref={ref} className={className}>
      {rows.map((row, rowIndex) => (
        <span key={`${text}-${rowIndex}`} className="block overflow-hidden">
          {row.map((segment, segmentIndex) => (
            <span
              key={`${segment}-${segmentIndex}`}
              data-stagger-segment
              className="inline-block will-change-transform"
            >
              {segment}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
