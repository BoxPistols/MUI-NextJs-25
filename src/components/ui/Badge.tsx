import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'border-transparent bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
        destructive: 'border-transparent bg-error-600 text-white hover:bg-error-700',
        outline: 'text-neutral-950 border-neutral-200',
        success: 'border-transparent bg-success-600 text-white hover:bg-success-700',
        warning: 'border-transparent bg-warning-600 text-white hover:bg-warning-700',
        info: 'border-transparent bg-info-600 text-white hover:bg-info-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };