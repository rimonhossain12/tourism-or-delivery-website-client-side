import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/single/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    const { user } = useAuth();
    console.log(user);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <h3 className="mt-5 text-warning">This is PlaceOrder</h3>,<hr className="w-25 mx-auto" />
                <Row xs={1} md={2} className="g-4">
                    <div>
                        <h4 className="fw-lighter,text-start">Your order products details</h4>
                        <Card style={{ width: '18rem' }} className="mt-3">
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>,
                                <h4>price: ${service.price}</h4>
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Click me see the img url
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">IMG URL</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {service.img}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Card.Text className="text-start">
                                    {service.description}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <h3 className="fw-normal">This is Booking From</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} value={user.email || ' '} />
                            <input {...register("name")} value={user.displayName} />
                            <input {...register("img")} placeholder="images url" />
                            <input {...register("countryName")} placeholder="visited country name" />
                            <input type="number" placeholder="price" />
                            <input type="submit" />
                        </form>
                    </div>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Booking;