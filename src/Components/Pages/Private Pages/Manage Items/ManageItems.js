import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import './ManageItems.css'


const ManageItems = () => {
    const [cars, setCars] = useInventory()

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

    return (
        <div>
            <div className='w-50 mx-auto text-center mt-5'>
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
                                        <h5>{car.name}</h5>
                                    </div>


                                    {/* BUTTONS  */}

                                    <div className='d-flex mt-3 '>
                                        <div>
                                            <button

                                                className="custom-btn update-btn manage-delete-btn">
                                                Update
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