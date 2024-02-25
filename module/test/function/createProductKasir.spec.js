import request from "supertest";
import { baseUrlKasir } from "../../data/config.js";

export async function createProduct(authToken) {
    const payload = {
        "category_id": "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3433",
        "name": "Tissue",
        "price": "5500",
        "cost": "3000",
        "stock": "3"
    }
    const response = await request(baseUrlKasir)
        .post("/products")
        .send(payload)
        .set('Authorization', `Bearer ${authToken}`);

        // console.log(response)

    return response
}

// Negative Case, Ada field mandatory yang belum diisi
export async function createProduct2(authToken) {
    const payload = {
        "category_id": "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3433",
        "name": "Tissue",
        "price": "",
        "cost": "3000",
        "stock": "3"
    }
    const response = await request(baseUrlKasir)
        .post("/products")
        .send(payload)
        .set('Authorization', `Bearer ${authToken}`);

        // console.log(response)

    return response
}