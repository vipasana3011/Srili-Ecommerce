import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function SuccessPage() {

  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F5] text-center px-6">

      <div className="text-6xl mb-6">🎉</div>

      <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Thank you for shopping with SRILI ✨
      </p>

      <Link to="/">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg">
          Continue Shopping
        </button>
      </Link>

    </section>
  );
}

export default SuccessPage;