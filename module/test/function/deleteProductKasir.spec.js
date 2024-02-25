import request from "supertest";
import { baseUrlKasir } from "../../data/config.js";

export async function deleteProduct(productId, authToken){
    try {
        const response = await request(baseUrlKasir)
          .delete(`/products/${productId}`)
          .set('Authorization', `Bearer ${authToken}`);
    
        return response;
      } catch (error) {
        // Handle errors, log them, or rethrow them based on your requirements
        console.error('Error deleting product:', error.message);
        throw error; // Rethrow the error to propagate it up the call stack
      }
}