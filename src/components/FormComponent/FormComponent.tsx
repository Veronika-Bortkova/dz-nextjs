"use client"
import React, {useActionState} from 'react';
import {createCar} from "@/src/server-actions/car-server-actions";
import "./FormComponent.css"



const FormComponent = () => {

    const [state, formAction, isPending] = useActionState(createCar, null);
    return (
        <>
            <h2>Add Car</h2>
        <form action={formAction}>
            <input type={"text"} name={"brand"} placeholder="Brand" disabled={isPending}></input>
            <div className={"error"}>{state?.errors?.brand && (<p>{state.errors.brand[0]}</p>)}</div>

            <input type={"number"} name={"price"} placeholder="Price" disabled={isPending}></input>
            <div className={"error"}>{state?.errors?.price && (<p>{state.errors.price[0]}</p>)}</div>

            <input type={"number"} name={"year"} placeholder="Year" disabled={isPending}></input>
            <div className={"error"}>{state?.errors?.year && (<p>{state.errors.year[0]}</p>)}</div>

            <button type="submit" disabled={isPending}>Add car</button>

        </form>
    </>
    );
};

export default FormComponent;