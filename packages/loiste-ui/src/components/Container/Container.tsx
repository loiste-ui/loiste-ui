import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import classNames from 'classnames'

const containerSchema = cva('flex flex-col', {
  variants: {
    type: {
      container: 'mx-auto max-w-7xl md:w-8/12 xl:w-10/12 p-2 md:p-4',
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
  ({ children, type, className, ...props }, ref) => {
    return (
      <div ref={ref} className={containerSchema({ type })} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
