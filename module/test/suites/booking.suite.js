//Get Token
//Get booking
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";
import { createBooking } from "../function/createBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";


// let idBook;

describe("End To End - Booking", () => {
    let token;
    let bookingId; 

    it("Success Create Booking", async () => {

        const response = await createBooking()
        expect(response.status).to.equal(200)
        bookingId = response.body.bookingid;

        console.log(bookingId);

    }).timeout(5000);
    
    it("Success Get Booking with ID", async () => {

        const response = await getBooking.id(bookingId)

        expect(response.status).to.equal(200)
        console.log(response.body)
        // bookingId = response.body.bookingid;

    }).timeout(5000); 
    
    it("Success Update Booking", async () => {
        token = await createToken()

        console.log(bookingId);
        console.log(token);
        const response = await updateBooking(bookingId,token)

        expect(response.status).to.equal(200)   

    }).timeout(5000);  
    
        // it("Success Get Booking All", async () => {

    //     const response = await getBooking.all()

    //     expect(response.status).to.equal(200)
    //     // Assuming response.body is an array of bookings
    //     const firstBooking = response.body[0];

    //     // Assuming each booking object has a property 'bookingId'
    //     const bookingId = firstBooking.bookingid;

    //     // console.log(bookingId)

    // }).timeout(5000); 
})