import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabirc"
            price={98.99}
            image="https://www.serversdirect.co.uk/Images/B07P4DKX14_1_Supersize.jpg?width=937&height=937&v=2"
            rating={5}
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.99}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
