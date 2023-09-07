import Image from 'next/image'
import { User } from 'lucide-react'
//import { Button } from './components/Button'

export default function Home() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      {/* left */}
      <div className='flex flex-col items-start justify-between px-28 py-16 bg-[url(../assets/bg-stars.svg)] bg-cover relative overflow-hidden border border-r border-white/10'>
          <div className='absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full
          blur-full'></div>
          <div className='absolute top-0 right-2 bottom-0 w-2 bg-stripes pr-2 '></div>
          
          <a className='flex items-center text-left gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
              <User className='h-5 w-5 text-gray-600' />
            </div>
            <p className='text-small leading-snug max-w-[160px]'>
              <span className='underline'>Crie sua conta</span> e salve suas memórias!
            </p>
          </a>
      </div>

      {/* right */}
      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
          <div className='flex flex-1 items-center justify-center'>
            <p className='text-center leading-relaxed w-[360px]'>
              Você ainda não registrou nenhuma lembrança, comece a {' '} 
              <a href="" className='underline hover:text-gray-50'>criar agora!</a>
            </p>
          </div>
      </div>
    </main>
  )
}
