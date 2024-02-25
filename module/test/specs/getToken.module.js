import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
let getToken;  // Declare the variable here
let bookingId;

describe("Create Token Scenario", () => {
    it('Positive - Success Get Token', async () => {
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        const response = await request(baseUrl)
        .post("/auth")
        .send(payload)
        .set('Content-Type', 'application/json');

        //Assertion pake chai
        expect(response.status).to.equal(200)
        // console.log(response.body)
        getToken = response.body.token
        console.log(getToken);

        // expect(response.body[0]).to.deep.include({ bookingid: 977 });
    }).timeout(5000);

    it('Import token', async () => {
        const token = await createToken() //ambil dari file test/function/createToken
        console.log(token);
    }).timeout(5000);

    it('Success Implement Token', async () => {
        const response = await request(baseUrl) //ambil dari file test/function/createToken
        .put("/booking/"+bookingId)
        .set("Cookie",token)

    }).timeout(5000);
})