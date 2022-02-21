import http from "./http-common";

class ProductDataService {

    async getProducts(location) {
        try {
            console.log(location)
            
            const response = await http.get(`products/${location}`);
            return response.data;

        } catch (e) {
            console.log(e)
            return null;
        }
    }

}

export default new ProductDataService();