import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export function Container(props: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx('px-2 md:max-w-4xl md:px-4', props.className)}
    >
      {props.children}
    </div>
  )
}
