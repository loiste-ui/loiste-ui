import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
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
  loading?: boolean
}

export const Button = ({
  children,
  variant,
  size,
  fullWidth,
  disabled,
  loading = false,
}: ButtonProps) => {
  return (
    <button className={buttonSchema({ variant, size, fullWidth, disabled })}>
      <span
        className={classNames(
          'leading-[1.25rem]',
          loading && 'text-transparent'
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  )
}
