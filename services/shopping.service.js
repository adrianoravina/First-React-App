import http from "./http-common-shop";

class ShoppingDataService {


    async createOrder(data) {
        try {
            console.log(data)
            
            const response = await http.post(`shopping/order`, data);

            //console.log(response)

            return response.data;
        } catch (e) {
            console.log(e)
            return null;
        }
    }


}

export default new ShoppingDataService();