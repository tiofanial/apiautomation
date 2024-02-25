//Get Token
//Get booking
import { expect } from "chai";
import { createToken } from "../function/createTokenKasir.spec.js";
import { getProducts } from "../function/getProductKasir.spec.js";
import { createProduct } from "../function/createProductKasir.spec.js";
import { updateProduct } from "../function/updateProductKasir.spec.js";
import { deleteProduct } from "../function/deleteProductKasir.spec.js";

// let idBook;

describe("CRUD Product Endpoints with Authentication", () => {
    let productId;
    let authToken;

    before(async () => {
        authToken = await createToken();
    })

    //CREATE
    it("Success Create Product", async () => {

        const response = await createProduct(authToken);
        expect(response.status).to.equal(201); 
        // productId = response.body.data.productId;

     }).timeout(5000);

    it("Should return message 'Product berhasil ditambahkan' when Success Create Product ", async () => {

        const response = await createProduct(authToken);
        expect(response.body).to.have.property('message', 'Product berhasil ditambahkan'); 

    }).timeout(5000);

    //--------------------------------------------READ--------------------------------------------//
    it("Success Get List Product", async () => {

        const response = await getProducts.all(authToken);

         //Assertion 1 : Check if the response status is equal to 200
        expect(response.status).to.equal(200)

        const responseBody = JSON.parse(response.text);

        if(responseBody.data.products.length > 0){
            productId = responseBody.data.products[0].id

             //Assertion 2 : Check if the "productId" property matches the expected pattern (e.g., UUID)
            expect(productId).to.match(/[a-f0-9-]+/);
        }else{
            console.log("Data Produk Kosong")
        }       

    }).timeout(15000);

    it("The 'data' property should contain an object with a 'products' array.", async () => {

        const response = await getProducts.all(authToken);
        //Assertion 1: Check if the response should have data property with products array
        expect(response.body.data).to.have.property('products').that.is.an('array');

    }).timeout(5000);

    //--------------------------------------------DETAIL--------------------------------------------//
    it("Success Get Detail Product", async () => {
        
        const response = await getProducts.params(productId, authToken);

        //Assertion 1: Check if the response status is equal to 400
        expect(response.status).to.equal(200)

        const responseBody = JSON.parse(response.text);
        console.log(responseBody)

        //Assertion 2 : Check if the "productId" property matches the expected pattern (e.g., UUID)
        expect(responseBody.data.product).to.have.property('price').that.is.a('number');

    }).timeout(15000);

    //--------------------------------------------UPDATE--------------------------------------------//
    it("Failed Update Product with message 'price' must be a number", async () => {
        const response = await updateProduct(productId, authToken);

        // Assertion 1: Check if the response status is equal to 400
        expect(response.status).to.equal(400)   

        // Assertion 2: Check if the response body includes the correct error message
        expect(response.body).to.include({ message: '"price" must be a number' });

    }).timeout(5000);

    //--------------------------------------------DELETE--------------------------------------------//
    it("Success Delete Product", async () => {

        const response = await deleteProduct(productId, authToken)
       
        // Assertion 1: Check if the response status is equal to 200
        expect(response.status).to.equal(200)

        // Assertion 2: Check if the "message" property contains a specific substring
        expect(response.body.message).to.include('Product berhasil dihapus');

    }).timeout(5000);
})