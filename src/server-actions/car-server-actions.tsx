"use server";
import {carSchema} from "@/src/lib/schema";
import {targetUrl} from "@/src/constants/urls";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

type FormState = {
    success: boolean;
    errors?: {
        brand?: string[];
        price?: string[];
        year?: string[];
    };
    message?: string;} | null;

export async function createCar (prevState: FormState | null | undefined, formData:FormData):Promise<FormState | undefined>{
    const data = {
        brand: formData.get("brand"),
        price: Number(formData.get("price")),
        year: Number(formData.get("year"))
    };

    const result = carSchema.safeParse(data);
    if (!result.success){
        console.log("error");
        return {
            success: false,
            errors: result.error.flatten().fieldErrors
        };
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