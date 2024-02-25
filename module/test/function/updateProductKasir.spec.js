import request from "supertest";
import { baseUrlKasir } from "../../data/config.js";

export async function updateProduct(productId, authToken) {

    const payload = {
        "category_id": "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3432",
        "name": "Kantong",
        "price": "Tujuh",
        "cost": "3000",
        "stock": "1"
    }

    const response = await request(baseUrlKasir)
        .put("/products/" + productId)
        .send(payload)
        .set('Authorization', `Bearer ${authToken}`);

    return response
}