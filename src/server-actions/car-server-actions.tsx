"use server";
import {carFormData, carSchema} from "@/src/lib/schema";
import {targetUrl} from "@/src/constants/urls";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function createCar ( data: carFormData):Promise<void>{

    const result = carSchema.safeParse(data);
    if (!result.success){
        console.log("error");
        throw new Error("Something went wrong!");
    }
    console.log("success", result.data);
    const response = await fetch(targetUrl.allCarsUrl,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }
    revalidatePath("/cars");
    redirect("/cars");
}