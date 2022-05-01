import { useEffect, useState } from "react"

const useInventory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory?page=1&size=0')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return [cars, setCars]
}

export default useInventory;