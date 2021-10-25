import React from "react";
import "./Product.css";
import { useStateValue } from "../context/StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        rating: props.rating,
        image: props.image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐️</p>
            ))}
        </div>
      </div>

      <img src={`${props.image}`} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
