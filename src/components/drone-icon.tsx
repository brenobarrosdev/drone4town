export function DroneIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* body */}
      <rect x="9" y="9" width="6" height="6" rx="1" />
      {/* arms */}
      <path d="M9 9 L5 5" />
      <path d="M15 9 L19 5" />
      <path d="M9 15 L5 19" />
      <path d="M15 15 L19 19" />
      {/* propellers */}
      <ellipse cx="5" cy="5" rx="2.4" ry="0.9" />
      <ellipse cx="19" cy="5" rx="2.4" ry="0.9" />
      <ellipse cx="5" cy="19" rx="2.4" ry="0.9" />
      <ellipse cx="19" cy="19" rx="2.4" ry="0.9" />
      {/* camera */}
      <circle cx="12" cy="15.5" r="0.9" />
    </svg>
  );
}
