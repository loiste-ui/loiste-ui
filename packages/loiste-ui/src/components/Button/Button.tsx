import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import React from 'react'
import { ButtonHTMLAttributes } from 'react'

const buttonSchema = cva('rounded-md relative', {
  variants: {
    variant: {
      default: 'bg-white text-text shadow-button border border-gray-400',
      primary: 'bg-primary text-white',
    },
    size: {
      slim: 'text-sm',
      medium: 'text-sm',
      large: 'text-base',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'bg-surfaceDisabled text-textDisabled',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      className: 'text-primary',
    },
    {
      size: 'slim',
      className: 'px-3 py-[3px]',
    },

    {
      size: 'medium',
      className: 'px-4 py-2',
    },

    {
      size: 'large',
      className: 'px-6 py-3',
    },
    {
      disabled: true,
      variant: 'default',
      className: 'border-borderDisabled',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
})

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonSchema> {
  children: React.ReactNode
  loading: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, fullWidth, disabled, loading }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonSchema({ variant, size, fullWidth, disabled })}
      >
        {loading ? (
          <>
            <span className="text-transparent">Loading..</span>
            <span className="sr-only">Loading</span>
          </>
        ) : (
          <span>{children}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
