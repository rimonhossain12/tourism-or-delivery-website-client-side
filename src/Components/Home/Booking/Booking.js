import { Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <div className="container">
            <h3 className="mt-5 text-warning">This is PlaceOrder</h3>,<hr className="w-25 mx-auto" />
            <Row xs={1} md={2} className="g-4">
                <div>
                    <h4 className="fw-lighter">Your order products details</h4>
                </div>
                <div>
                    <h3 className="fw-normal">This is Booking From</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name" />
                        <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  placeholder="Country Location"/>
                        <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Ticket Price" />
                        <input {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder="Place Description" />
                        <input type="submit" />
                    </form>
                </div>
            </Row>
        </div>
        </>
  );
};

export default Booking;