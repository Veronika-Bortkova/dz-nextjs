"use client"
import React, {useActionState} from 'react';
import {createCar} from "@/src/server-actions/car-server-actions";



const FormComponent = () => {

    const [state, formAction, isPending] = useActionState(createCar, null);
    return (
        <form action={formAction}>
            <input type={"text"} name={"brand"} placeholder="Brand" disabled={isPending}></input>
            {state?.errors?.brand && (<p>{state.errors.brand[0]}</p>)}

            <input type={"number"} name={"price"} placeholder="Price" disabled={isPending}></input>
            {state?.errors?.price && (<p>{state.errors.price[0]}</p>)}

            <input type={"number"} name={"year"} placeholder="Year" disabled={isPending}></input>
            {state?.errors?.year && (<p>{state.errors.year[0]}</p>)}

            <button type="submit" disabled={isPending}>Add car</button>

        </form>
    );
};

export default FormComponent;