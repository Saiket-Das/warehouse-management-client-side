import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useOrder = () => {
    const [user] = useAuthState(auth);
    const userEmail = user.email;

    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/order?email=${userEmail}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return [orders, setOrders]
}

export default useOrder;