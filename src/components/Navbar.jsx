import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Navbar() {

  const { cart, wishlist } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-4xl font-serif text-pink-500">
          SRILI 
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

        {/* 🏠 HOME */}
        <Link to="/">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
        </Link>

        {/* 🛍️ SHOP (ALL PRODUCTS PAGE) */}
        <Link to="/shop">
          <li className="hover:text-pink-500 cursor-pointer">Shop</li>
        </Link>

        <Link to="/about">
          <li className="hover:text-pink-500 cursor-pointer">About</li>
        </Link>

        <Link to="/wishlist">
          <li className="hover:text-pink-500 cursor-pointer">
             Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
          </li>
        </Link>

        <Link to="/checkout">
          <li className="hover:text-pink-500 cursor-pointer">Checkout</li>
        </Link>

      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* LOGIN */}
        <Link to="/login">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
            Login
          </button>
        </Link>

        {/* CART */}
        <Link to="/cart">
          <div className="relative cursor-pointer">

            <HiOutlineShoppingBag className="text-3xl text-gray-700" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}

          </div>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
            Wishlist ❤️ ({wishlist.length})
          </Link>

          <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;