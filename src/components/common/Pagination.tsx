import ReactPaginate from 'react-paginate'

import { cn } from '../../utiles/lib/tailwindMerge'

interface PaginationProps {
    changePage: (n: number) => void
    pageCount: number
    className?: string
}

export default function Pagination({ changePage, pageCount, className = '' }: PaginationProps) {
    return (
        <ReactPaginate
            nextLabel=""
            previousLabel=""
            breakLabel="..."
            onPageChange={(el) => {
                changePage(el.selected)
            }}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            pageLinkClassName='p-2 border rounded-md text-xl'
            // при нажатии на точки происходит запрос, after для того, чтобы перекрыть это поведение
            breakClassName="p-1.5 border text-xl relative rounded-md after:block after:absolute after:top-0 after:z-10 after:w-full after:h-full after:cursor-default"
            containerClassName={cn('flex items-center justify-center mt-10 gap-4', className)}
            activeClassName="text-xl border-red-500 text-red-500"
            renderOnZeroPageCount={null}
        />
    )
}
