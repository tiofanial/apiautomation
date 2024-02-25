import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = 'sally'; 
const paramLastName = 'brown';
// const bookingId = '4';

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () => {
        const response = await request(baseUrl).get("/booking")

        //Assertion pake chai
        expect(response.status).to.equal(200)
        console.log(response.body)

        // expect(response.body[0]).to.deep.include({ bookingid: 977 });
    }).timeout(5000);

    it('Positive - success get all booking with param', async () => {
        const response = await request(baseUrl)
        .get(`/booking?firstname=${paramFirstName}&lastname=${paramLastName}`);

        //Assertion pake chai
        expect(response.status).to.equal(200)
        console.log(response.body)

        // expect(response.body[2]).to.deep.include({ bookingid: 1049 });
    }).timeout(5000);

    it('Positive - success get bookingid', async () => {
        const bookingId = 4; // Set the desired bookingId
        const response = await request(baseUrl).get(`/booking/${bookingId}`).set('Accept', 'application/json');

        //Assertion pake chai
        expect(response.status).to.equal(200)
        console.log(response.body)

        // expect(response.body[2]).to.deep.include({ bookingid: 1049 });
    }).timeout(5000);
    
})

//using function
describe("Get Booking Scenario by Function", () => {
    it('success get booking all', async () => {
        const response = await getBooking.all();

        //Assertion pake chai
        expect(response.status).to.equal(200)
        console.log(response.body)
    }).timeout(5000);
    
})