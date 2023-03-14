import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'

const headingSchema = cva('', {
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
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    weight: 'normal',
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingSchema> {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, size, as = 'h2', className, ...props }, ref) => {
    const Tag = as
    return (
      <Tag
        ref={ref}
        className={headingSchema({ variant, size, className })}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Heading.displayName = 'Heading'
