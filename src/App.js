import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import "./App.css";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jq0WvDlG6dY6sfcS83RliQ5LRYRcriNIi9IXzE71At2KuRIhwDyL30yDPKGMLlOfYbeBNWh6uuLlJpYNijs2J5700QdRGZcQG"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
