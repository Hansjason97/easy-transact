import { navLinks } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import NavigationLink from './navigationLink'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto px-6 lg:px-7">
        <div className="flex justify-between items-center h-18">
          {/**Logo Home */}
          <Link href={"/"}><img src={"/images/logo.svg"} alt='easy-transact' className="h-8 w-auto"/></Link>
          {/**Main navigation desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.filter(link=> link.href !== "/").map(({href, title}, id)=>
            <NavigationLink key={id} href={href}>{title}</NavigationLink>
            )}
          </nav>
          {/**Call to Action */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href={"https://api.gpay.com/"} target="_blank"><Button>{"Documentation API"}</Button></Link>
          </div>
          {/**Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className='flex md:hidden'>
              <Link href={"/"}><Button size={"icon"} variant={"outline"}><Menu size={16}/></Button></Link>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <img src={"/images/logo.svg"} className='h-8 w-auto'/>
                </SheetTitle>
                <SheetDescription/>
              </SheetHeader>
              <div className='w-full px-3 flex flex-col gap-1'>
                {navLinks.map((item, id)=><NavigationLink key={id} href={item.href} className="w-full rounded-sm inline-flex min-h-14 items-center px-4 py-2 hover:bg-secondary/10">{item.title}</NavigationLink>)}
                <Link href={"https://api.gpay.com"} target="_blank" className="flex items-center min-h-12 px-4 py-2 text-white bg-primary hover:bg-primary/80 rounded-sm transition-all duration-300 ease-out text-sm font-medium">{"Documentation API"}</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar