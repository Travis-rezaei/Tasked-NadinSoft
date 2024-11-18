import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext } from 'react'
import { Toggle, SetToggle } from '../App'
import { useNavigate } from 'react-router-dom'
import { StorageSetItem } from '../Components/webStorage'

type FormValues = {
    Name: string;
    Mode: string;
    Language: string;
}

export const useProfile = () => {
    const ToggleItem = useContext(Toggle)
    const setToggle = useContext(SetToggle)
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const Navigate = useNavigate()




    const onSubmit: SubmitHandler<FormValues> = (data) => {
        StorageSetItem('ProfileInformations', JSON.stringify(data))
        setToggle(!ToggleItem)
        Navigate('/Dashboard')
    }

    return { register, handleSubmit, onSubmit, errors }
}