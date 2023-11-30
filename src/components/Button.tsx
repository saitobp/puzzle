import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className='bg-white hover:border-white hover:text-white h-8 rounded-md border border-bright-pink px-8 py-2 text-xs font-bold uppercase text-bright-pink transition-colors hover:bg-bright-pink active:bg-dark-pink'
    >
      {props.children}
    </button>
  )
}
