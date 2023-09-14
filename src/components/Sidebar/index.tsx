'use client'

import { Logo } from './logo'
import { MainNavigaiton } from './MainNavigation'
import { Footer } from './Footer'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="top-p fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-zinc-200 bg-white data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-4 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <MainNavigaiton />

        <Footer />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
