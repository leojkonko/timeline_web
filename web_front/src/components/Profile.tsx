import { getUser } from '@/lib/auth'
import { User } from 'lucide-react'
import Image from 'next/image'

export function Profile() {

    const { nome, avatarUrl, sub } = getUser()

return (
    <div className='flex items-center text-left gap-3'>
        <Image src={avatarUrl} width={40} height={40} alt="User Avatar" className='w-10 h-10 rounded-full' />
        <p className='text-small leading-snug max-w-[160px] '>
            {nome}
            <a href="" className='text-red-400 block hover:text-red-300'>Quero sair</a>
        </p>
    </div>
)
}