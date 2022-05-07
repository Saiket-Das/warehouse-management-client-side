import { useEffect, useState } from "react"

const useInventory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://salty-escarpment-87764.herokuapp.com/inventory?page=1&size=0')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return [cars, setCars]
}

export default useInventory;