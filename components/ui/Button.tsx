import clsx from 'clsx';

const Button = ({
  children,
  as: Component = 'button',
  className,
  variant = 'primary',
  ...rest
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  variant?: 'primary' | 'secondary';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  return (
    <Component
      className={clsx([
        'relative overflow-hidden border border-transparent',
        'transition-all duration-300 ease-out',
        'text-sm font-medium leading-5',
        'inline rounded-lg px-4 py-2',
        'inline-flex items-center gap-1 no-underline',
        variant === 'primary' && [
          'bg-gradient-to-r from-futuristic-500 to-futuristic-600',
          'dark:from-futuristic-600 dark:to-futuristic-700',
          'hover:shadow-neon dark:hover:shadow-neon-strong',
          'text-white hover:text-white dark:text-white dark:hover:text-white',
          'before:absolute before:inset-0 before:bg-gradient-cyber before:opacity-0 before:transition-opacity',
          'hover:before:opacity-100',
        ],
        variant === 'secondary' && [
          'bg-gray-100 dark:bg-gray-800',
          'hover:bg-gray-200 dark:hover:bg-gray-700',
          'text-gray-900 dark:text-gray-100',
          'hover:shadow-md dark:hover:shadow-neon',
        ],
        'focus:outline-none focus:ring-2 focus:ring-futuristic-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
        className,
      ])}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
