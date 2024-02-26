import s from './Loader.module.css'

export default function Loader() {
    return (
        <div className='flex justify-center'>
            <span className={s.loader} />
        </div>
    )
    
}
