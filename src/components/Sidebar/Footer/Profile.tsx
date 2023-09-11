import { Button } from '@/components/Button'
import { LogOut } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="flex flex-row items-center gap-3">
      <img
        src="https://github.com/MatheusFilg.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700">
          Matheus Filgueiras
        </span>
        <span className="truncate text-sm/5 font-normal text-zinc-500">
          matheus_falmeida@hotmail.com
        </span>
      </div>

      <Button
        variant="ghost"
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
