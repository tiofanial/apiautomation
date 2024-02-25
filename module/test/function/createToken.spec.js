import request from "supertest";
// import config from "../../data/config.json" assert { type: "json" }; // kalau mau gunain config json
import { baseUrl } from "../../data/config.js";

export async function createToken(){
    const payload = {
        "username" : "admin",
        "password" : "password123"
    }
    
    //send request
    // const response = await request(config.baseUrl) // kalau mau gunain config json
    const response = await request(baseUrl)
    .post("/auth")
    .send(payload)
    .set("Content-Type","application/json")

    const token = response.body.token
    return token
}