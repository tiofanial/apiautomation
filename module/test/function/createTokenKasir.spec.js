import request from "supertest";
import { baseUrlKasir } from "../../data/config.js";

export async function createToken() {
    const payload = {
        "email": "sample@ex.com",
        "password": "123adsfadf@"
    }

    const response = await request(baseUrlKasir)
        .post("/authentications")
        .send(payload)

    const token = response.body.data.accessToken

    // console.log(response.body.accessToken);
    return token
}