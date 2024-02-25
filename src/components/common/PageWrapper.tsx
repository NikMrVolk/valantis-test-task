import { cn } from '../../utiles/lib/tailwindMerge'

interface PageWrapperProps {
    children?: React.ReactNode
    className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
    return <main className={cn('px-5 2xl:px-pageWrapper', className)}>{children}</main>
}
