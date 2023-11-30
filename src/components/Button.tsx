import { ComponentProps } from 'react'
import { clsx } from 'clsx'

type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'h-8 rounded-md border border-bright-pink bg-white px-8 py-2 text-xs font-bold uppercase text-bright-pink transition-colors hover:border-white hover:bg-bright-pink hover:text-white active:bg-dark-pink',
        props.className,
      )}
    >
      {props.children}
    </button>
  )
}
