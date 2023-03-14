import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

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
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingSchema> {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({
  children,
  variant,
  size,
  as = 'h2',
  className,
  ...props
}: HeadingProps) => {
  const Tag = as
  return (
    <Tag className={headingSchema({ variant, size, className })} {...props}>
      {children}
    </Tag>
  )
}
