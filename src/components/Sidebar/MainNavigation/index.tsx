import { NavItem } from './NavItem'
import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
} from 'lucide-react'

export function MainNavigaiton() {
  return (
    <nav className="flex flex-col space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
