import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { useForm } from "react-hook-form";
import { useState } from 'react';


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [addService,setAddService] = useState('');
    const onSubmit = data => {
        setAddService(data);
    };

    // useEffect(() => {
        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
                alert('added data successfully');
            }
        })
    // },[])
    return (
        <div>
            <Header></Header>
            <h2>Add A service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='img url' />
                <input {...register("name")} placeholder='place Name'/>
                <input {...register("country")} placeholder='location of place Name'/>
                <input {...register("price")} type="number" placeholder='how much money to visit' />
                <input type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;