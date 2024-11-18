import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { StorageSetItem, StorageGetItem } from '../Components/webStorage'



type TodoType = {
    Todo?: string
}

export const useTodo = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TodoType>()
    const [todos, setTodos] = useState<(string | undefined)[]>()

    useEffect(() => {
        const GetTodos = StorageGetItem('Todos')
        if (GetTodos) {
            setTodos(JSON.parse(GetTodos))
        }
    }, [])

    const onSubmit: SubmitHandler<TodoType> = (data) => {
        console.log(todos);

        if (todos) {
            setTodos([...todos, data.Todo])
            StorageSetItem('Todos', JSON.stringify([...todos, data.Todo]))


        } else {
            setTodos([data.Todo])
            StorageSetItem('Todos', JSON.stringify([data.Todo]))

        }
    }

    // const remove=()=>{
    //     localStorage.removeItem('Todos',JSON.stringify('2item'))
    // }

    return { register, handleSubmit, errors, todos, onSubmit }

}

