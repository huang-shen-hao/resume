import { useRef } from 'react';
import gsap from 'gsap';

export function Magnet({ children, className = '', strength = 18 }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;

    gsap.to(ref.current, {
      x,
      y,
      duration: 0.26,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.42,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={ref}
      className={`inline-flex will-change-transform ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </div>
  );
}
