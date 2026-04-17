export function ShinyText({ children, className = '' }) {
  return (
    <span
      className={`rb-shiny-text bg-[linear-gradient(90deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,1)_24%,rgba(154,194,255,0.95)_48%,rgba(255,255,255,1)_74%,rgba(255,255,255,0.76)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
