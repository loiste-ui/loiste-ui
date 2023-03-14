import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'

const textSchema = cva('', {
  variants: {
    variant: {
      default: '',
      primary: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      '1xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textSchema> {
  children: React.ReactNode
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={textSchema({ variant, size, className })}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'
