import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'
import { font } from '../../schemas/font/font'

const headingSchema = cva('', {
  variants: {
    variant: {
      default: '',
      primary: '',
    },
    ...font,
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
