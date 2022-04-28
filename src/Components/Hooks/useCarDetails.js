import { useEffect, useState } from "react"

const useCarDetails = carId => {
    const [service, setService] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [carId])

    return [service]

}

export default useCarDetails;