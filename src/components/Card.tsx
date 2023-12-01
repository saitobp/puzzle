import { clsx } from 'clsx'

type CardProps = {
  title: string
  description: string
  image: string
  alt: string
  bgColor: 'beige' | 'white'
  iconBgColor: 'white' | 'dark-blue'
  noShadow?: boolean
  direction?: 'row' | 'column'
  className?: string
}

export function Card(props: CardProps) {
  return (
    <div
      className={clsx(
        props.className,
        'min-h-[256px] w-full rounded-md bg-beige p-4 md:h-80',
        {
          'bg-beige': props.bgColor === 'beige',
          'bg-white': props.bgColor === 'white',
          'shadow-md': !props.noShadow,
          'flex flex-row justify-center gap-4': props.direction === 'row',
        },
      )}
    >
      <div
        className={clsx(
          'mb-4 flex h-[48px] w-[48px] min-w-[48px] items-center justify-center rounded-full shadow-md',
          {
            'bg-white': props.iconBgColor === 'white',
            'bg-dark-blue': props.iconBgColor === 'dark-blue',
          },
        )}
      >
        <img src={props.image} alt={props.alt} className='h-[16px]' />
      </div>

      <div>
        <h2
          className={clsx('mb-4 text-2xl font-bold text-black', {
            'text-left': props.direction === 'row',
            'text-center': props.direction === 'column' || !props.direction,
          })}
        >
          {props.title}
        </h2>

        <p
          className={clsx('text-md font-normal text-black', {
            'text-left': props.direction === 'row',
            'text-center': props.direction === 'column' || !props.direction,
          })}
        >
          {props.description}
        </p>
      </div>
    </div>
  )
}
