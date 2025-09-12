'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    href: string;
    children: ReactNode;
    className?: string;
}

function NavigationLink({href, children, className}:Props) {

    const path = usePathname();

  return (
    <Link href={href} className={cn("text-gray-600 hover:text-gray-900 transition-all duration-300 ease-out text-sm font-medium", path.endsWith(href) && "font-semibold text-secondary hover:text-secondary/80", className)}>{children}</Link>
  )
}

export default NavigationLink