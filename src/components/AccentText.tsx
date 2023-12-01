import { ComponentProps } from 'react'

type AccentTextProps = ComponentProps<'strong'>

export function AccentText(props: AccentTextProps) {
  return (
    <strong {...props} className='font-bold text-dark-blue'>
      {props.children}
    </strong>
  )
}
