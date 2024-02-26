import Select from 'react-select'
import Button from '../UI/Button'
import Input from '../UI/Input'

interface SearchFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    selectedOption: IOption | null
    setSelectedOption: (e: IOption | null) => void
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    buttonDisabled?: boolean
}

export interface IOption {
    value: string
    label: string
}

const options = [
    { value: 'price', label: 'Цене' },
    { value: 'brand', label: 'Бренду' },
    { value: 'product', label: 'Названию' },
] as IOption[]

export default function SearchForm({
    value,
    onChange,
    selectedOption,
    setSelectedOption,
    onSubmit,
    buttonDisabled = false,
}: SearchFormProps) {
    return (
        <form
            className="flex flex-col gap-4 md:flex-row mb-10 sm:w-3/4 mx-auto"
            onSubmit={onSubmit}
        >
            <Select
                className="md:w-80"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Искать по..."
            />
            <Input value={value} onChange={onChange} placeholder="Поиск..." className="" />
            <Button disabled={buttonDisabled}>Искать</Button>
        </form>
    )
}
