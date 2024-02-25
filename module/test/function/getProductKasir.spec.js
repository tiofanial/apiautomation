import request from "supertest";
import { baseUrlKasir } from "../../data/config.js";

//menampilkan seluruh list produk
async function getProductList(authToken){
    let response = await request(baseUrlKasir)
    .get("/products")
    .set('Authorization', `Bearer ${authToken}`);
    
    return response
}

async function getProductDetail(productId, authToken){
    // console.log(productId)
    // console.log(authToken)
    let response = await request(baseUrlKasir)
    .get(`/products/${productId}`)
    .set('Authorization', `Bearer ${authToken}`);  

    return response
}

export const getProducts = {
    all : getProductList,
    params : getProductDetail
}