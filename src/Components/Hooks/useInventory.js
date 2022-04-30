import { useEffect, useState } from "react"

const useInventory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return [cars, setCars]
}

export default useInventory;