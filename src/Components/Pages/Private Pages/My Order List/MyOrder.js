
import useOrder from '../../../Hooks/useOrder';

const MyOrder = () => {

    const [orders, serOrder] = useOrder()
    console.log(orders)


    const deleteItem = (id) => {
        const URL = `http://localhost:5000/order/${id}`;

        const areYouSure = window.confirm('Are you sure?')
        if (areYouSure) {
            fetch(URL, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingOrders = orders.filter(order => order._id !== id);
                    serOrder(remainingOrders)
                })
        }
    }


    return (
        <div>
            <h2 className='text-center mt-5'>YOUR ORDER LIST</h2>
            {
                orders.map(order =>
                    <div className='inventory-manage-container w-50 mx-auto mt-4 mb-4'
                        key={order._id}>

                        <div>
                            <div className="item">

                                {/* IMAGE */}
                                <div className="image">
                                    <img className='image' src={order.img} alt="" />
                                </div>

                                {/* TITLE  */}
                                <div className="description mt-2">
                                    <h5>{order.car}</h5>
                                </div>


                                {/* BUTTONS  */}

                                <div className='d-flex mt-3 '>
                                    <div>
                                        <p className='mt-3 me-5'>{order.brandName}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => deleteItem(order._id)}
                                            className="custom-btn update-btn ">
                                            Delete
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                )}
        </div>
    );
};

export default MyOrder;