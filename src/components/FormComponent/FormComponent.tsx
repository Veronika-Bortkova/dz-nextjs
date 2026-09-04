"use client"

import "./FormComponent.css"
import {useForm} from "react-hook-form";
import {carFormData, carSchema} from "@/src/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCar} from "@/src/server-actions/car-server-actions";


const FormComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<carFormData>({
        resolver: zodResolver(carSchema),
        mode: "onChange"
    });

const onSubmit = async (data: carFormData)=>{
    await createCar(data)

}

    return (
        <>
            <h2>Add Car</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} {...register("brand")} placeholder="Brend" ></input>
            <div className={"error"}>{errors.brand && (<p>{errors.brand.message}</p>)}</div>

            <input type={"number"} {...register("price", { valueAsNumber: true }) } placeholder="Price" ></input>
            <div className={"error"}>{errors.price && (<p>{errors.price.message}</p>)}</div>

            <input type={"number"} {...register("year", { valueAsNumber: true })} placeholder="Year"></input>
            <div className={"error"}>{errors.year && (<p>{errors.year.message}</p>)}</div>

            <button type="submit" disabled={!isValid}>Add car</button>

        </form>
    </>
    );
};

export default FormComponent;