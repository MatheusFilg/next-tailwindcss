import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select/index'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-b-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg/7 font-medium text-zinc-900">
              Personal info
            </h2>
            <span className="text-sm/5text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <InputRoot>
              <InputControl id="fistName" defaultValue="Matheus" />
            </InputRoot>

            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 lg:sr-only"
              >
                Last name
              </label>
              <InputRoot>
                <InputControl id="lastName" defaultValue="Filgueiras" />
              </InputRoot>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5; block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <div className="grid grid-cols-1 gap-6">
            <InputRoot>
              <InputControl id="role" defaultValue="Developer" />
            </InputRoot>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a Country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select placeholder="Select a Timezone...">
            <SelectItem
              value="utc08"
              text="Pacific Standard Time (UTC-08:00)"
            />
            <SelectItem value="utc03" text="America São Paulo (UTC-03:00)" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5; block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-1">
            <div className="flex grid-cols-2 flex-col gap-3 lg:grid">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal Text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center">
                <Button variant="ghost" type="button">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>

                <Button variant="ghost" type="button">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>

                <Button variant="ghost" type="button">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>

                <Button variant="ghost" type="button">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>

                <Button variant="ghost" type="button">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
