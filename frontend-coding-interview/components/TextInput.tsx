import { Field, Input, Label } from '@headlessui/react'

export default function TextInput({ label, classes, link, onChange, value }: { label: string, value: string, classes?: string, link?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className={"w-full max-w-md" + (classes ? ` ${classes}` : '')}>
      <Field>
        <div className="flex items-center justify-between mb-1">
          <Label className="font-bold text-black text-[14px] leading-[100%] tracking-[0%] font-['Helvetica']">
            {label}
          </Label>
          {link && <a href={link} className="text-blue-500 text-sm ml-2">{link}</a>}
        </div>
        <Input
          onChange={onChange}
          value={value}
          className={'mt-3 block w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none'}
        />
      </Field>
    </div>
  )
}