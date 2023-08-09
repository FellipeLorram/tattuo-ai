import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NavLink } from './navLink';
import { Logo } from './logo';
import { UserAvatar } from './userAvatar';


export async function Topbar() {
  const session = await getServerSession(authOptions)
  return (
    <div className='w-full border-b bg-gray-900 md:px-12 gap-6 flex flex-col px-6 pt-6 md:pt-8'>
      <div className='flex flex-row items-center justify-between'>

        <Logo />

        <UserAvatar user={{
          name: session?.user?.name || null,
          image: session?.user?.image || null,
        }} />
      </div>

      <nav className='flex flex-row items-center justify-start flex-1 gap-2  -mb-px'>
        <NavLink href='/generate'>
          Gerar
        </NavLink>
        <NavLink href='/my-images'>
          Salvas
        </NavLink>
        <NavLink href='/my-decals'>
          Decalques
        </NavLink>

      </nav>
    </div>
  )
}
