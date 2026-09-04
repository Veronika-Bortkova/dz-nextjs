import React, {FC} from 'react';
import {ICar} from "@/src/model/carModel";
import "./CarComponent.css"

type Props = {
    car: ICar
}

const CarComponent:FC<Props> = ({car}) => {
    return (
        <div className={"car"}>
            <p>Brand - {car.brand}</p>
            <p>Price - {car.price} $</p>
            <p>Year - {car.year}</p>
        </div>
    );
};

export default CarComponent;