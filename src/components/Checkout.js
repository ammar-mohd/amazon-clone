import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout(props) {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
          className="checkout__ad"
        />

        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((baskets, index) => (
          <CheckoutProduct
            key={index}
            id={baskets.id}
            title={baskets.title}
            price={baskets.price}
            image={baskets.image}
            rating={baskets.rating}
          />
        ))}
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
