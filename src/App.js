import React from "react";
// components
import Navbar from "./components/navbar/Navbar";
import MainNavbar from "./components/navbar/MainNavbar";
import GlobalStyle from "./components/GlobalStyle";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
// pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Register from "./pages/Register";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import CMS from "./pages/CMS";
import ProductDetails from "./pages/ProductDetails";
//ROUTING
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  let subPath = pathname.split("/")[1];
  let bool =
    subPath === "login" || subPath === "Register" || subPath === "cms"
      ? false
      : true;
  return (
    <div className="App">
      <GlobalStyle />
      {bool && (
        <>
          <Navbar />
          <MainNavbar />
        </>
      )}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>{" "}
        <Route path="/account">
          <Account></Account>
        </Route>{" "}
        <Route path="/shops" exact>
          <Shops></Shops>
        </Route>{" "}
        <Route path="/cart" exact>
          <Cart></Cart>
        </Route>
        <Route path="/shops/:id" exact>
          <Shop></Shop>
        </Route>{" "}
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/shops/:shopid/:productid">
          <ProductDetails></ProductDetails>
        </Route>
        {/* empty route path acts like a default page */}
        <Route path="/cms">
          <CMS />
        </Route>
      </Switch>
      {bool && <Footer />}
    </div>
  );
}

export default App;
