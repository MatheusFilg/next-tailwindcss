import { Logo } from './logo'
import { MainNavigaiton } from './MainNavigation'
import { Footer } from './Footer'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-4 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <MainNavigaiton />

      <Footer />
    </aside>
  )
}
