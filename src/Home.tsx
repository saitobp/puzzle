import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { HeadingText } from '@/components/HeadingText'
import { Input } from '@/components/Input'

export function Home() {
  return (
    <>
      <header className='flex h-16 w-full justify-center bg-bright-pink'>
        <Container className='flex w-full items-center justify-between'>
          <div className='flex items-center justify-between'>
            <img src='/logo.svg' alt='logo' className='h-14' />
            <h1 className='text-xl font-bold uppercase text-white'>Puzzle</h1>
          </div>

          <Button>Contato</Button>
        </Container>
      </header>

      <section className='section-background mb-8 flex  w-full items-center justify-center bg-beige'>
        <Container className='flex w-full flex-col justify-between py-4 md:flex-row-reverse md:py-8'>
          <img src='/logo.svg' alt='big logo' className='h-64' />

          <div className='flex flex-col gap-4 md:block'>
            <HeadingText
              text='Conectamos **ideias** e criamos **soluções**, com nosso time todo projeto é
              uma história de **sucesso.**'
            />

            <h2 className='text-xl font-bold'>
              Leve sua empresa para a era digital com excelência. Agende agora
              mesmo uma avaliação gratuita.
            </h2>

            <Button className='mt-4 pb-8 pt-4 shadow-btn-md hover:shadow-btn-hover'>
              Entre em Contato Agora!
            </Button>
          </div>
        </Container>
      </section>

      <section className='mb-8 flex w-full justify-center'>
        <Container className='flex w-full flex-col items-center justify-between'>
          <HeadingText
            className='text-center'
            text='A **peça** que está faltando para o **sucesso** do seu **negócio!**'
          />

          <div className='mt-8 flex w-full flex-col justify-between gap-8 md:flex-row'>
            <Card
              title='Tenha presença online.'
              alt='Puzzle piece pink 1'
              description='Garanta que sua empresa seja encontrada facilmente pelos consumidores modernos que buscam informações e serviços online.'
              image='/puzzle-piece-pink-1.svg'
              bgColor='beige'
              iconBgColor='white'
            />

            <Card
              title='Seu Negócio Sempre Aberto!'
              alt='Puzzle piece pink 2'
              description='Esteja disponível 24 horas por dia, 7 dias por semana, promovendo seu negócio mesmo fora do horário comercial convencional.'
              image='/puzzle-piece-pink-2.svg'
              bgColor='beige'
              iconBgColor='white'
            />

            <Card
              title='Credibilidade da empresa.'
              alt='Puzzle piece pink 3'
              description='Tenha um site profissional e conquiste a confiança dos clientes fornecendo informações confiáveis e estabelecendo uma presença online sólida.'
              image='/puzzle-piece-pink-3.svg'
              bgColor='beige'
              iconBgColor='white'
            />
          </div>
        </Container>
      </section>

      <section className='section-background mb-8 flex items-center justify-center bg-beige pb-8'>
        <Container className='py-4'>
          <HeadingText
            className='text-center'
            text='Entenda a **essência** por trás da empresa.'
          />

          <div className='mt-4 w-full rounded-md bg-white p-4 shadow-md md:flex md:flex-row-reverse'>
            <img src='/analytics-woman.svg' alt='Analytics woman' />

            <div>
              <Card
                title='Cliente no centro de tudo'
                alt='Puzzle piece white 1'
                description='Cada ação é orientada pelo desejo de proporcionar uma experiência excepcional ao cliente. Sua voz é a peça principal em cada decisão do produto.'
                image='/puzzle-piece-white-1.svg'
                bgColor='white'
                iconBgColor='dark-blue'
                noShadow
                direction='row'
                className='h-[264px] min-h-[180px] md:h-[200px] md:min-h-[180px]'
              />

              <Card
                title='Profissionais qualificados'
                alt='Puzzle piece white 2'
                description='A experiência que faz a diferença, nossa equipe de desenvolvedores trazem em sua bagagem atuação em projetos para grandes empresas como Itaipu Binacional e Grupo Ser Educacional.'
                image='/puzzle-piece-white-2.svg'
                bgColor='white'
                iconBgColor='dark-blue'
                noShadow
                direction='row'
                className='h-[264px] min-h-[180px] md:h-[200px] md:min-h-[180px]'
              />

              <Card
                title='Eficiência na entrega'
                alt='Puzzle piece white 3'
                description='Iremos entender sua dor, para juntos planejar e estruturar o plano de ação mais eficiente para melhor lhe atender.'
                image='/puzzle-piece-white-3.svg'
                bgColor='white'
                iconBgColor='dark-blue'
                noShadow
                direction='row'
                className='h-[264px] min-h-[180px] md:h-[200px] md:min-h-[180px]'
              />
            </div>
          </div>
        </Container>
      </section>

      <section className='mb-8 flex w-full flex-col items-center justify-center'>
        <Container className='relative flex w-full flex-col items-center justify-between'>
          <img
            src='/logo-piece-pink.svg'
            alt='Logo piece pink'
            className='absolute right-2 top-[-72px] hidden h-[200px] md:block'
          />

          <img
            src='/logo-piece-blue.svg'
            alt='Logo piece blue'
            className='absolute bottom-[-128px] left-0 hidden h-[200px] md:block'
          />

          <HeadingText
            className='max-w-md text-center'
            text='Envie-nos uma **mensagem** e descubra como podemos tornar sua **experiência** ainda **melhor!**'
          />

          <form
            className='mt-4 grid w-full grid-cols-3 gap-4 px-2 md:max-w-lg md:grid-cols-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type='text'
              placeholder='Nome'
              className='col-span-3 md:col-span-2'
            />

            <Input
              type='number'
              placeholder='Telefone'
              className='col-span-3 md:col-span-2'
            />

            <Input
              type='email'
              placeholder='Email'
              className='col-span-3 md:col-span-4'
            />

            <Input
              type='text'
              placeholder='Mensagem'
              className='col-span-3 md:col-span-4'
              textArea
            />

            <Button className='col-span-4' variant='filled-blue'>
              Transforme sua empresa agora!
            </Button>
          </form>
        </Container>
      </section>

      <section className='section-background  flex items-center justify-center bg-beige pt-16'>
        <div className='flex w-full justify-center bg-bright-pink py-4'>
          <Container className='w-full text-sm text-white'>
            <div className='mb-2 w-full'>
              <strong>Endereço</strong>
              <p>Foz do Iguaçu, Paraná</p>
            </div>

            <div className='mb-2 w-full'>
              <strong>Email</strong>
              <p>contact@mail.com</p>
            </div>

            <div className='w-full'>
              <strong>Telefone</strong>
              <p>+55 (45) 9 9999-9999</p>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}
