import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function getBookingAll(){
    let response = await request(baseUrl)
    .get("/booking")

    return response
}

async function getBookingParam(paramFirstName, paramLastName){
    let response = await request(baseUrl)
    .get("/booking"+`?firstname=${paramFirstName}&lastname=${paramLastName}`)

    return response
}

async function getBookingId(bookingId){
    let response = await request(baseUrl)
    .get(`/booking/${bookingId}`).set('Accept', 'application/json')

    return response
}

export const getBooking = {
    all : getBookingAll,
    params : getBookingParam,
    id : getBookingId, 
}