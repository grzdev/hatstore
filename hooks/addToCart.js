// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const AddToCart = async(productId, quantity) => {
//     try {
//         const id = await AsyncStorage.getItem('token');
//         console.log(token)
//         const endpoint = 'https://drab-ruby-adder-vest.cyclic.app/api/cart';
        
//         const data  = {
//             cartItem: productId,
//             quantity: quantity
//         }

//         const headers = {
//             'Content-Type': 'application/json',
//             'token': 'Bearer ' + JSON.parse(token)
//         }

//         await axios.post(endpoint, data, {headers})
//     } catch (error) {
//         throw new Error(error.message)
//         // console.log(error)
//     }
// };

// export default AddToCart

import axios from "axios";

const AddToCart = async (productId, quantity) => {
    try {
        const endpoint = 'https://drab-ruby-adder-vest.cyclic.app/api/cart';
    
        const data = {
          cartItem: productId,
          quantity: quantity
        }
    
        const headers = {
          'Content-Type': 'application/json',
        }
    
        const response = await axios.post(endpoint, data, { headers });
    
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Request failed with status code ${response.status}`);
        }
      } catch (error) {
        // Handle the error
        console.error(error);
        throw new Error("An error occurred while adding to the cart");
      }
    }; 

export default AddToCart;
