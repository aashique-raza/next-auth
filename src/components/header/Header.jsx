import React from 'react'
import Link from 'next/link'

function Header() {

    const headerLinks=[
        {
            pathName:'home',
            path:'/'
        },
        {
            pathName:'about',
            path:'/about'
        },
        {
            pathName:'contact',
            path:'/contact'
        },
        {
            pathName:'blog',
            path:'/blog'
        },
        {
            pathName:'signIn',
            path:'/signin'
        },
    ]

  return (
    <header className=' flex justify-between px-2 lg:px-20 py-4 bg-slate-950 items-center'>
        <h1 className=' text-white uppercase font-bold font-serif text-3xl'>logo</h1>
        <nav className=' flex gap-5 items-center text-white capitalize font-semibold text-xl'>
            {
                headerLinks.map((link)=>(
                    <Link key={link.pathName} href={link.path}>{link.pathName}</Link>
                ))
            }
        </nav>
    </header>
  )
}

export default Header