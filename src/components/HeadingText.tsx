import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type HeadingTextProps = Omit<ComponentProps<'h1'>, 'children'> & {
  text: string
}

export function HeadingText(props: HeadingTextProps) {
  // Split the text by the bold parts
  const parts = props.text.split(/\*\*(.*?)\*\*/g)

  return (
    <h1
      {...props}
      className={clsx('text-4xl font-bold text-bright-pink', props.className)}
    >
      {parts.map((part, index) =>
        index % 2 === 0 ? (
          part
        ) : (
          <strong className='font-bold text-dark-blue'>{part}</strong>
        ),
      )}
    </h1>
  )
}
