import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const boxSchema = cva('', {
  variants: {
    as: {
      div: '',
      span: '',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    as: 'div',
  },
})

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxSchema> {
  children: React.ReactNode
  as?: 'div' | 'span'
}

type ElementType = HTMLDivElement | HTMLSpanElement
export const Box = React.forwardRef<ElementType, BoxProps>(
  ({ children, as = 'div', ...props }, ref) => {
    const Tag = as
    return (
      <Tag ref={ref} className={boxSchema({ as })} {...props}>
        {children}
      </Tag>
    )
  }
)
Box.displayName = 'Box'
