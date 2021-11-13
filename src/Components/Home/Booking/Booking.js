import React from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css';


const Booking = () => {
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    // const {serviceId} = useParams();
    // console.log(serviceId);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/singleProduct/${serviceId}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // },[])


    return (
        <div className="container">
            <h2>This is Booking</h2>,
            <Row xs={1} md={2} className="g-4">
               <div>
                  <h4>ID Details Show Here:{/* serviceId */}</h4>
               </div>
               {/*  <div>
                    <h3>This is Booking From</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        <input type="number" {...register("age", { min: 18, max: 99 })} />
                        <input type="submit" />
                    </form>
                </div> */}
            </Row>
           
        </div>
    );
};

export default Booking;