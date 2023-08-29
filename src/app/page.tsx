import { SettingsTabs } from '@/components/SettingsTabs'

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

      <form id="settings" action="" className="mt-6 flex w-full flex-col ">
        form
      </form>
    </>
  )
}
