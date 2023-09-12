import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex, Bai_Jamjuree,} from 'next/font/google'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700',variable: '--font-jam'  })

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
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
              {children}
          </div>
        </main>

      </body>
    </html>
  )
}
