import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import SuccessPage from "./pages/SuccessPage";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <div className="bg-[#FFF8F5] text-black min-h-screen flex flex-col">

      {/* TOAST */}
      <Toaster position="top-right" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* CHECKOUT */}
          <Route
            path="/checkout"
            element={<CheckoutPage />}
          />

          {/* WISHLIST */}
          <Route
            path="/wishlist"
            element={<WishlistPage />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={<LoginPage />}
          />

          {/* SUCCESS */}
          <Route
            path="/success"
            element={<SuccessPage />}
          />

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;