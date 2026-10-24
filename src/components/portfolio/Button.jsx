import React from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary:
    'border border-border bg-background px-6 py-3 text-foreground hover:border-accent/30 hover:bg-accent-tint',
  accent:
    'border border-accent bg-accent text-accent-foreground px-6 py-3 hover:bg-transparent hover:text-accent',
  ghost: 'px-1 py-1 text-muted-foreground hover:text-accent',
};

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}