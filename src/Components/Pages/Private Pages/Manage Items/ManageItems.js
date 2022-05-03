import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import EditDetails from '../../Public Pages/Inventory/EditDetails/EditDetails';
import './ManageItems.css'


const ManageItems = () => {
    const navigate = useNavigate()
    const [cars, setCars] = useInventory([])

    const deleteItem = (id) => {
        const areYouSure = window.confirm('Are you sure?')
        if (areYouSure) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainCars = cars.filter(car => car._id !== id);
                    setCars(remainCars)
                })
        }
    }

    const handleEditDeatils = (car) => {
        navigate(`/editDetails/${car._id}`)

    }

    return (
        <div>
            <div className='inventory-container mx-auto text-center mt-5'>
                <h2> MANAGE INVENTORY</h2>

                {
                    cars.map(car =>
                        <div className='inventory-manage-container mb-4'
                            key={car._id}>

                            <div>
                                <div className="item">

                                    {/* IMAGE */}
                                    <div className="image">
                                        <img className='image' src={car.img} alt="" />
                                    </div>

                                    {/* TITLE  */}
                                    <div className="description mt-2">
                                        <h5 className='brand-name'>{car.name}</h5>
                                    </div>

                                    <div className='mt-4 me-5'>
                                        <ul className='list-unstyled inventory-ul'>
                                            <li>Brand: {car.brand}</li>
                                            <li>Quantity: {car.quantity}</li>
                                        </ul>
                                    </div>

                                    {/* BUTTONS  */}

                                    <div className='update-delete-button mt-3 '>
                                        <div>
                                            <button
                                                onClick={() => handleEditDeatils(car)}
                                                className="custom-btn update-btn manage-delete-btn">
                                                Edit
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => deleteItem(car._id)}
                                                className="custom-btn update-btn ">
                                                Delete
                                            </button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    )}

            </div >
        </div >
    );
};

export default ManageItems;