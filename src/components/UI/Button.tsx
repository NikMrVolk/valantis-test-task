import { cn } from '../../utiles/lib/tailwindMerge'

interface ButtonProps {
    children?: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function Button({ children, onClick = () => {}, className = '' }: ButtonProps) {
    return (
        <button
            className={cn(
                'py-1 px-4 text-lg border border-slate-300 rounded-md active:translate-y-px',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
