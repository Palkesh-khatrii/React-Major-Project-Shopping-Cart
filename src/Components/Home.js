import React from "react"
import { CartState } from "../Context/Context"
import Filter from "./Filter"
import SingleProduct from "./SingleProduct"
import './style.css'

const Home = () => {

  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState()
  // console.log(products)

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      )
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock)
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery)
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (product) => product.ratings >= byRating
      )
    };
    if (searchQuery) {
      sortedProducts = sortedProducts.filter(
        (product) => product.name.toLowerCase().includes(searchQuery)
      )
    };
    return sortedProducts;
  }

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default React.memo(Home)
