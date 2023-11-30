import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

export function Home() {
  return (
    <>
      <Header />

      <section className='section-background flex h-96 w-full items-center justify-center bg-beige'>
        <div className='flex w-full max-w-4xl justify-between'>
          <div className='max-w-lg'>
            <h1 className='text-4xl font-bold text-bright-pink'>
              Conectamos <strong className='text-dark-blue'>ideias</strong> e
              criamos <strong className='text-dark-blue'>soluções</strong>, com
              nosso time todo projeto é uma história de{' '}
              <strong className='text-dark-blue'>sucesso.</strong>
            </h1>

            <h2 className='text-xl font-bold'>
              Leve sua empresa para a era digital com excelência. Agende agora
              mesmo uma avaliação gratuita.
            </h2>

            <Button className='mt-4'>Entre em Contato Agora!</Button>
          </div>

          <img src='/logo.svg' alt='big logo' className='h-72' />
        </div>
      </section>
    </>
  )
}
