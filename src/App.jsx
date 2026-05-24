import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

import Cart from "./components/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import About from "./pages/About";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <div className="bg-[#FFF8F5] text-black min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          {/* ⭐ IMPORTANT FIX */}
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<SuccessPage />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;