import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export function Container(props: ContainerProps) {
  return (
    <div {...props} className={clsx('md:max-w-4xl', props.className)}>
      {props.children}
    </div>
  )
}
