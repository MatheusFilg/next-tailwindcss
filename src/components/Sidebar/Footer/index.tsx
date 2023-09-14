import { Cog, LifeBuoy } from 'lucide-react'
import { NavItem } from '../MainNavigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'

export function Footer() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <UsedSpaceWidget />

      <div className=" h-px bg-zinc-200 dark:bg-zinc-700" />

      <Profile />
    </div>
  )
}
