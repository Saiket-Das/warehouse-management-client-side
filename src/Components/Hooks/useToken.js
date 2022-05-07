import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState([]);

    const email = user?.user?.email
    useEffect(() => {
        const getToken = async () => {
            if (email) {
                const { data } = await axios.post('https://salty-escarpment-87764.herokuapp.com/login', { email })
                localStorage.setItem('token', data.token)
            }
        }
        getToken();
    }, [user]);
    return [token]
}

export default useToken;