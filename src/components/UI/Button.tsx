import { cn } from '../../utiles/lib/tailwindMerge'

interface ButtonProps {
    children?: React.ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export default function Button({
    children,
    onClick = () => {},
    className = '',
    disabled = false,
}: ButtonProps) {
    return (
        <button
            className={cn(
                `py-1 px-4 text-lg border border-slate-300 rounded-md ${
                    disabled ? 'opacity-50 cursor-default' : 'active:translate-y-px'
                }`,
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
