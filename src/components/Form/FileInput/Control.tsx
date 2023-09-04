'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    // aqui eu to usando a função array para colocar os vários arquivos dentro de uma array

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFilesSelected}
      multiple={multiple}
    />
  )
}
