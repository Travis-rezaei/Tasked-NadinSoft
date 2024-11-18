import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StorageSetItem, StorageGetItem } from '../Components/webStorage'


type FormValues = {
    Cityvalue: string
}

export const useWeather = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const [City, setCity] = useState<string>('')



    useEffect(() => {
        const GetCity = StorageGetItem('City')
        if (GetCity) {
            setCity(GetCity)

        }
    }, [])


    const fetchWeatherData = async (CityName: string) => {
        try {
            const Res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: CityName,
                    appid: '335c0d03cd5bc702684588b1f8e17b1b',
                    units: 'metric'
                }
            });
            return Res.data
        } catch (Err) {
            return Err
        }
    }

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['Weather-Key'],
        queryFn: () => fetchWeatherData(City),
        enabled: City.length > 2
    })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        await setCity(data.Cityvalue)
        await refetch()
        StorageSetItem('City', data.Cityvalue)
    }


    return { register, handleSubmit, onSubmit, isLoading, errors, data }

}
