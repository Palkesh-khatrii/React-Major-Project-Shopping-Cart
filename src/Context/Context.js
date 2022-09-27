import { createContext, useContext, useReducer } from "react"
import {faker} from "@faker-js/faker"
import { cartReducer, productReducer } from "./Reducer"

const Cart = createContext();
faker.seed(99)

const Context = ({ children  }) => {
    const products =[...Array(21)].map(()=>({
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.food(640, 480, true),
        inStock: faker.datatype.number( {min: 0, max: 7}),
        fastDelivery: faker.datatype.boolean([0,3,5,6,7]),
        ratings:faker.datatype.number( {min: 0, max: 5})
    }));
    // console.log(products)

    const[state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]
    })

    const[productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating:0,
      searchQuery:"",
    })
  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
      { children  }
    </Cart.Provider>
  )
}
export default Context

export const CartState =()=>{
    return useContext(Cart)
}
