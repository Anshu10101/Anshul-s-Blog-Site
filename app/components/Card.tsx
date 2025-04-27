import Link from '@/components/ui/Link'
import Image from '@/components/ui/Image'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const Card = ({ title, description, imgSrc, href }: CardProps) => (
  <div className="md:w-1/2 p-4" style={{ maxWidth: '544px' }}>
    <div className="group h-full overflow-hidden rounded-xl border-2 border-gray-200 border-opacity-60 dark:border-gray-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-accent-purple/20 bg-white dark:bg-gray-800 hover:border-primary-500 dark:hover:border-accent-purple">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <div className="animate-float">
            {imgSrc && (
              <div className="overflow-hidden">
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48 transform transition-transform duration-500 group-hover:scale-105"
                  width={544}
                  height={306}
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-accent-cyan transition-colors duration-300">
                {title}
              </h2>
              <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                {description}
              </p>
              <div className="text-base font-medium leading-6 text-primary-500 group-hover:text-primary-600 dark:text-accent-cyan dark:group-hover:text-accent-purple transition-colors duration-300 flex items-center">
                Learn more <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="animate-float">
          {imgSrc && (
            <div className="overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48 transform transition-transform duration-500 group-hover:scale-105"
                width={544}
                height={306}
              />
            </div>
          )}
          <div className="p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
) 