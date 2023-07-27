import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { NavLink } from './navLink';
import { Logo } from './logo';


export function Topbar() {
  return (
    <div className='w-full border-b border-zinc-300 md:px-10 gap-4 flex flex-col md:gap-0 px-4 py-2 bg-white'>
      <div className='flex flex-row items-center justify-between'>

        <Logo />

        <Avatar>
          <AvatarImage src='https://github.com/FellipeLorram.png' />
          <AvatarFallback>
            FL
          </AvatarFallback>
        </Avatar>
      </div>

      <nav className='flex flex-row items-center justify-center flex-1 gap-2'>
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
