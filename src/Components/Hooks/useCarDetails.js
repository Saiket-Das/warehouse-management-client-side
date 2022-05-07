import { useEffect, useState } from "react"

const useCarDetails = carId => {
    const [carDetails, setCarDetails] = useState([])
    useEffect(() => {
        const url = `https://salty-escarpment-87764.herokuapp.com/inventory/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [carId])

    return [carDetails];

}

export default useCarDetails;