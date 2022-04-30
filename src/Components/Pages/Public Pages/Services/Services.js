import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InsuranceImg from '../../../../images/services/car-insurance.png'
import LoanImg from '../../../../images/services/car-loan.png'
import EssentialsImg from '../../../../images/services/customer-support.png'
import CheckupImg from '../../../../images/services/protection.png'
import './Services.css'


const Services = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center pt-4'>BUY ESSENTIALS</h2>

            <div className='container mb-5 mt-5'>
                <div className='service-row'>

                    {/* --------------- SERVICE ONE --------------- */}
                    <Card className='service-card' style={{ width: '18rem' }}>
                        <Card.Img className='service-img p-4' variant="top" src={InsuranceImg} />
                        <Card.Body className='text-center'>
                            <Card.Title >CAR INSURANCE</Card.Title>
                            <Card.Text className='service-description'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    {/* --------------- SERVICE TWO --------------- */}
                    <Card className='service-card' style={{ width: '18rem' }}>
                        <Card.Img className='service-img p-5' variant="top" src={EssentialsImg} />
                        <Card.Body className='text-center'>
                            <Card.Title>CAR ACCESSORIES</Card.Title>
                            <Card.Text className='service-description'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    {/* --------------- SERVICE THREE ---------------  */}
                    <Card className='service-card' style={{ width: '18rem' }}>
                        <Card.Img className='service-img p-5' variant="top" src={LoanImg} />
                        <Card.Body className='text-center'>
                            <Card.Title>CAR FINANCE & LOAN</Card.Title>
                            <Card.Text className='service-description'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    {/* --------------- SERVICE FOUR ---------------  */}
                    <Card className='service-card' style={{ width: '18rem' }}>
                        <Card.Img className='service-img p-5' variant="top" src={CheckupImg} />
                        <Card.Body className='text-center'>
                            <Card.Title>CHECK CAR'S HISTORY</Card.Title>
                            <Card.Text className='service-description'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>

        </div>
    );
};

export default Services;



<Nav.Link
    as={Link} to={`/Inventory/`}
    className='nav-link text-black d-flex justify-content-center'>
    <button className="custom-btn details-btn"><span>See Details</span></button>
</Nav.Link>

