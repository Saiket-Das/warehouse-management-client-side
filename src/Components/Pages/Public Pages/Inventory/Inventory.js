import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Car from './Car/Car';
import './Inventory.css'

const Inventory = () => {
    const [cars] = useInventory();

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [selectedCars, setSelectedCars] = useState([]);


    useEffect(() => {
        fetch(`https://salty-escarpment-87764.herokuapp.com/inventory?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setSelectedCars(data));
    }, [page, size]);

    useEffect(() => {
        fetch('https://salty-escarpment-87764.herokuapp.com/totalCar')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 8);
                setPageCount(pages);
            })
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5'>OUR INVENTORY</h2>

            <Nav.Link
                as={Link} to={'/addCar'}
                className='nav-link text-black d-flex justify-content-center'>
                <button style={{ width: '20rem' }} className="custom-btn details-btn"><span>Add new car to the Inventory</span></button>
            </Nav.Link>

            <div className="container mt-4">
                <div className="row">
                    {
                        selectedCars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
            </div>

            <div className='pagination w-25 mx-auto'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }

                <select onChange={event =>
                    setSize(event.target.value)
                }>
                    <option value="6" >6</option>
                    <option value="8" selected>8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
            </div>

        </div >
    );
};

export default Inventory;