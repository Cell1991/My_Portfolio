import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function LineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.365 9.863c.349.004.63.285.63.631 0 .345-.281.63-.63.63h-2.19v1.56h2.19c.349 0 .63.285.63.63 0 .349-.281.63-.63.63h-2.82c-.349 0-.63-.281-.63-.63V7.64c0-.349.281-.63.63-.63h2.82c.349 0 .63.281.63.63 0 .346-.281.63-.63.63h-2.19v1.593h2.19zm-5.85 3.451c0 .349-.281.63-.63.63-.349 0-.63-.281-.63-.63V7.64c0-.349.281-.63.63-.63.349 0 .63.281.63.63v5.674zm-2.52 0c0 .248-.145.474-.367.574-.105.045-.218.068-.333.068-.138 0-.276-.034-.398-.109l-2.61-1.635v1.102c0 .349-.281.63-.63.63-.349 0-.63-.281-.63-.63V7.64c0-.248.145-.474.367-.574.222-.098.481-.053.664.109l2.61 1.635V7.64c0-.349.281-.63.63-.63.349 0 .63.281.63.63v5.674zm-6.3-5.674v5.674c0 .349-.281.63-.63.63-.349 0-.63-.281-.63-.63V7.64c0-.349.281-.63.63-.63.349 0 .63.281.63.63zm17.305 4.36c0-4.836-4.94-8.77-11-8.77S0 7.64 0 12.476c0 4.336 3.842 7.974 9.034 8.63.352.076.83.232.951.533.109.27.071.694.035.967-.058.44-.271 1.72-.294 1.86-.041.248-.192.97.838.529 1.03-.44 5.568-3.278 7.597-5.612 1.485-1.745 2.839-4.007 2.839-6.523z"/>
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
