import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import './AddService.css';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId){
                    alert('Your Place added successfully');
                    reset();
                }
            })
    };

    return (
        <div className='form-div'>
            <Header></Header>
            <h2>Add A service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='img url paste here' />
                <input {...register("name")} placeholder='Place Name' />
                <input {...register("country")} placeholder='Country Name' />
                <textarea {...register("description")} placeholder='Write some description' />
                <input type="number" {...register("price")} placeholder='Visiting Price' />
                <input type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;