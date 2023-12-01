import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type HeadingTextProps = ComponentProps<'h1'>

export function HeadingText(props: HeadingTextProps) {
  return (
    <h1
      {...props}
      className={clsx('text-4xl font-bold text-bright-pink', props.className)}
    >
      {props.children}
    </h1>
  )
}
