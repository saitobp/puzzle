import { Button } from '@/components/Button'

export function Header() {
  return (
    <header className='flex h-16 w-full justify-center bg-bright-pink'>
      <div className='flex w-full items-center justify-between px-4 md:max-w-6xl'>
        <div className='flex items-center'>
          <img src='/logo.svg' alt='logo' className='h-14' />
          <h1 className='text-xl font-bold uppercase text-white'>Puzzle</h1>
        </div>

        <Button>Contato</Button>
      </div>
    </header>
  )
}
