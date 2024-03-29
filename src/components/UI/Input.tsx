import { cn } from '../../utiles/lib/tailwindMerge'

interface InputProps {
    className?: string
    type?: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    className = '',
    type = 'text',
    placeholder,
    value,
    onChange,
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={cn(
                `placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`,
                className
            )}
            value={value}
            onChange={onChange}
        />
    )
}
