import React from 'react';
import {getAllCars} from "@/src/services/api.services";
import CarComponent from "@/src/components/CarComponent/CarComponent";
import "./CarsComponent.css"

const CarsComponent = async () => {
    const cars = await getAllCars();
    return (
        <div className={"CarsBlock"}>
            {cars.map(car => <CarComponent car={car} key={car.id}/>)}
        </div>
    );
};

export default CarsComponent;