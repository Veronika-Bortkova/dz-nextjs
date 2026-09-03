import {targetUrl} from "@/src/constants/urls";
import {ICar} from "@/src/model/carModel";


export const getAllCars = async ():Promise<ICar[]> =>{
    const cars = await fetch(targetUrl.allCarsUrl)
        .then(value => value.json())
    return cars
}