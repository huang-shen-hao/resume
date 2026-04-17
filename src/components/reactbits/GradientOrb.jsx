export function GradientOrb({
  size = 'h-32 w-32',
  className = '',
  dataOrb,
}) {
  return (
    <div
      data-orb={dataOrb}
      className={`relative ${size} rounded-full ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.95),rgba(255,255,255,0.62)_16%,rgba(153,138,255,0.78)_38%,rgba(123,160,255,0.8)_56%,rgba(171,247,235,0.7)_82%)] shadow-[inset_-16px_-16px_30px_rgba(255,255,255,0.25),inset_16px_16px_32px_rgba(255,255,255,0.35),0_28px_48px_rgba(129,140,248,0.34)]" />
      <div className="absolute inset-[12%] rounded-full border border-white/40 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.95),transparent_34%)] opacity-95" />
      <div className="absolute inset-[28%] rounded-full border border-white/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_60%)] mix-blend-screen" />
      <span className="absolute left-[34%] top-[32%] h-[26%] w-[8%] rounded-full bg-white/95 blur-[0.4px]" />
      <span className="absolute left-[56%] top-[38%] h-[20%] w-[7%] rounded-full bg-white/95 blur-[0.4px]" />
      <div className="absolute inset-[-16%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.46),transparent_58%)] blur-2xl" />
    </div>
  );
}
