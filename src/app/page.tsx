import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-row items-center justify-between border-b border-b-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg/7 font-medium text-zinc-900">
              Personal info
            </h2>
            <span className="text-sm/5text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <button
              className="h-10 w-20 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm/5 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="h-1d0 w-16 rounded-lg bg-violet-600 px-4 py-2.5 text-sm/5 font-semibold text-white hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <InputRoot>
              <InputControl id="fistName" defaultValue="Matheus" />
            </InputRoot>

            <InputRoot>
              <InputControl id="lastName" defaultValue="Filgueiras" />
            </InputRoot>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email adress
          </label>
          <div className="grid grid-cols-1 gap-6">
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="matheus_falmeida@hotmail.com"
              />
            </InputRoot>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5; block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <div className="grid grid-cols-1 gap-6">
            <InputRoot>
              <InputControl id="role" defaultValue="Developer" />
            </InputRoot>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <div className="grid grid-cols-1 gap-6"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <div className="grid grid-cols-1 gap-6"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5; block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="grid grid-cols-1 gap-6"></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio Projects
            <span className="mt-0.5; block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex flex-row items-center justify-end gap-3 pt-5">
          <button
            className="h-10 w-20 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm/5 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            type="button"
          >
            Cancel
          </button>
          <button
            className="h-1d0 w-16 rounded-lg bg-violet-600 px-4 py-2.5 text-sm/5 font-semibold text-white hover:bg-violet-700"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}
