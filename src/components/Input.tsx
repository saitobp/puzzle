import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {
  textArea?: boolean
  rows?: number
}

export function Input(props: InputProps) {
  if (props.textArea) {
    return (
      <textarea
        placeholder={props.placeholder}
        rows={props.rows || 4}
        className={clsx(
          'h-32 w-full rounded-md border border-dark-blue px-2 shadow-dark-blue outline-none',
          props.className,
        )}
      />
    )
  }

  return (
    <input
      {...props}
      className={clsx(
        'h-8 w-full rounded-md border border-dark-blue px-2 shadow-dark-blue outline-none',
        props.className,
      )}
    />
  )
}
