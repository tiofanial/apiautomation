import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createBooking(){
    const payload = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
    const response = await request(baseUrl)
    .post("/booking")
    .send(payload)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

    return response
}