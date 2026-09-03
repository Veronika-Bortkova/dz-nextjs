import {z} from "zod";

const brandPattern = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/;

export const carSchema = z.object({

    brand: z.string().regex(brandPattern, {
        message: "Brand must contain only letters (1-20 characters)"
    }),
    price: z.number({ message: "Price must be a number" }).int({ message: "Price must be an integer" }).min(0, { message: "Price cannot be less than 0" }).max(1000000, { message: "Price cannot exceed 1,000,000" }),
    year: z.number({ message: "Year must be a number" }).int({ message: "Year must be an integer" }).min(1990, { message: "Year must be 1990 or later" }).max(2026, { message: "Year cannot be later than 2026" })

});

export type carFormData = z.infer<typeof carSchema>;