import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './UseFrom.css';

const UserFrom = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
               if(res.data.insertedId){
                   alert('Successfully added data');
                   reset();
               }
            })
    };

    return (
        <div className="add-service">
            <h2>Please login is use from</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                <textarea {...register("description",)} placeholder="Description" />
                <input {...register("country",)} placeholder="country" />


                <input type="number" {...register("price",)} placeholder="price" />

                <input type="text" {...register("img",)} placeholder="img URL" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default UserFrom;
