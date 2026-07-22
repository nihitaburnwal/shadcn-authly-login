import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='authly-logo'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('size-6', className)}
      {...props}
    >
      <title>Authly</title>

      {/* Shield */}
      <path d='M12 3L5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3z' />

      {/* Check mark */}
      <path d='M9.5 12l2 2 4-4' />
    </svg>
  )
}