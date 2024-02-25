import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Create Booking Scenario", () => {
    it('Positive - Success Create Booking', async () => {
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

        //Assertion pake chai
        expect(response.status).to.equal(200)
        console.log(response.body)

        // expect(response.body[0]).to.deep.include({ bookingid: 977 });
    }).timeout(5000);
})