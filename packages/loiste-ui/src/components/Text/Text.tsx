import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'
import { font } from '../../schemas/font/font'

const textSchema = cva('', {
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
