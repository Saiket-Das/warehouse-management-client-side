import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://salty-escarpment-87764.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews]
}

export default useReviews;