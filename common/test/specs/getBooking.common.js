const { expect } = require("chai");

const request = required("supertest");
const baseUrl = "https://restful-booker.herokuapp.com"

desctibe("Get All Booking", () =>{
    it('Positive - success get all booking', () =>{
        const response = request(baseUrl).get("/booking")

        expect(response.status).to.equal(200)
    })
})