import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import Car from './Car/Car';
import './Inventory.css'

const Inventory = () => {
    const [cars] = useInventory()
    return (
        <div>
            <h2 className='text-center mt-5'>INVENTORY {cars.length}</h2>

            <div className="container mt-4">
                <div className="row">
                    {
                        cars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Inventory;