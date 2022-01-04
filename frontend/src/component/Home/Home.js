import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./Product.js"
import MetaData from "../layout/MetaData"

let product = {
    name : "Blue TShirt",
    price : 12000,
    _id :  "Hello world",
    images : [{url : "https://i.ibb.co/DRST11n/1.webp"}]
}


const Home = () => {
  return (
    <Fragment>
      <MetaData title = "HOME PAGE IS WORKING "/>

      <div className="banner">
        <p>Welcome to Shopify</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
              Scroll <CgMouse/>
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
                <Product  product={product}></Product>
          </div>
    </Fragment>
  );
};

export default Home;
