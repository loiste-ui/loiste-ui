import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const flexSchema = cva('', {
  variants: {
    direction: {
      column: 'flex flex-col',
      row: 'flex',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    direction: 'row',
  },
})

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexSchema> {
  children: React.ReactNode
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ children, direction, ...props }, ref) => {
    return (
      <div ref={ref} className={flexSchema({ direction })} {...props}>
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'
