import Image from 'next/image'
import { cookies } from 'next/headers'
//import { Button } from './components/Button'
import {} from 'next/image'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Profile } from '@/components/Profile'

export default function Home() {
const isAuthenticated = cookies().has('token')

  return (
    <main className='grid grid-cols-2 min-h-screen'> 
      {/* left */}
      <div className='flex flex-col items-start justify-between px-28 py-16 bg-[url(../assets/bg-stars.svg)] bg-cover relative overflow-hidden border border-r border-white/10'>
          <div className='absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full
          blur-full'></div>
          <div className='absolute top-0 right-2 bottom-0 w-2 bg-stripes pr-2 '></div>

           {/* sign in */}
              { isAuthenticated ? <Profile /> : <SignIn /> } 
 
           {/* hero */}
            <Hero />

            {/* copyright */}
            <Copyright />

      </div>

      {/* right */}
      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
          <EmptyMemories />
      </div>
    </main>
  )
}
