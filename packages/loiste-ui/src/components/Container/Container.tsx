import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const containerSchema = cva('flex', {
  variants: {
    type: {
      container: 'mx-auto flex-col',
      fluid: '',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    type: 'container',
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerSchema> {
  children: React.ReactNode
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <div ref={ref} className={containerSchema({ type })} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
