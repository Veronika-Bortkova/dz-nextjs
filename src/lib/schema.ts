import * as Joi from "joi";

const brandPattern = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/;

export const carSchema = Joi.object({

    brand: Joi.string()
        .regex(brandPattern)
        .messages({"string.pattern.base": "Brand must contain only letters (1-20 characters)"}),

    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .messages({
        "number.base": "Price must be a number",
        "number.integer": "Price must be an integer",
        "number.min": "Price cannot be less than 0",
        "number.max": "Price cannot exceed 1,000,000"
    }),
    year: Joi.number()
        .integer()
        .min(1990)
        .max(2026)
        .messages({
            "number.base": "Year must be a number",
            "number.integer": "Year must be an integer",
            "number.min": "Year must be 1990 or later, and no later than 2026",
            "number.max": "Year cannot be later than 2026, and cannot be earlier than 1990"
        })

})



export type carFormData = {
    brand: string;
    price: number;
    year: number;
}