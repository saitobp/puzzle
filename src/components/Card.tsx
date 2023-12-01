type CardProps = {
  title: string
  description: string
  image: string
  alt: string
}

export function Card(props: CardProps) {
  return (
    <div className='h-80 w-72 rounded-md bg-beige p-4 shadow-md'>
      <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md'>
        <img src={props.image} alt={props.alt} className='h-[16px]' />
      </div>

      <h2 className='h-20 w-60 text-center text-2xl font-bold text-black'>
        {props.title}
      </h2>

      <p className='text-md h-36 w-60 text-center font-normal text-black'>
        {props.description}
      </p>
    </div>
  )
}
