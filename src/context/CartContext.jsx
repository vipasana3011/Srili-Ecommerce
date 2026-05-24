import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 🌙 DARK MODE STATE
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 🛍️ ADD TO CART
  const addToCart = (product) => {

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updated);
      toast.success("Quantity increased ✨");

    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Added to cart 🛍️");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❤️ WISHLIST
  const toggleWishlist = (product) => {

    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      toast.error("Removed from wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist ❤️");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        darkMode,
        setCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        toggleWishlist,
        toggleDarkMode
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;