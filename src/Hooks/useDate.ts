import { useState, useEffect } from 'react'
import { StorageGetItem } from '../Components/webStorage'

export const useDate = () => {
    const locale = 'fa';
    const [today, setDate] = useState(new Date());
    const [user, setUser] = useState<string>(' ')

    useEffect(() => {

        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);

        const GetUser = StorageGetItem('ProfileInformations')
        if (GetUser) {
            setUser(JSON.parse(GetUser).Name)
        }
        return () => {
            clearInterval(timer);
        }
    }, []);



    const hour: number = today.getHours();
    const wish: string = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const time: string = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' });


    return {
        time,
        wish,
        user
    };
};