import { Search } from 'lucide-react'
import { Logo } from './logo'
import { MainNavigaiton } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-4 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        />
        {/* flex-1 significa que ele vai tentar ocupar todo o espaço disponivel do elemento pai */}
      </div>

      <MainNavigaiton />
    </aside>
  )
}
