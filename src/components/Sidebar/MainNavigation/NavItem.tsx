import { Home, ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  /* o icon poderia ser React Node porém faria com que a estilização
   tivesse que ser definida também pelo componente pai */
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a className="group flex flex-row items-center gap-3 rounded px-3 py-2 align-middle hover:bg-violet-50">
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 ">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
