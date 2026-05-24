import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const {
    addToCart,
    toggleWishlist,
    wishlist
  } = useContext(CartContext);

  // FIXED PRODUCT FIND
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">

        <div>

          <h2 className="text-3xl font-semibold text-gray-700">
            Product not found 😭
          </h2>

          <Link
            to="/shop"
            className="text-pink-500 mt-4 inline-block"
          >
            Go back to Shop
          </Link>

        </div>

      </div>
    );
  }

  // WISHLIST CHECK
  const isWishlisted = wishlist?.some(
    (item) => item.id === product.id
  );

  return (
    <section className="min-h-screen bg-[#FFF8F5] px-6 md:px-16 py-20">

      {/* BACK BUTTON */}
      <Link
        to="/shop"
        className="text-pink-500 font-medium mb-10 inline-block"
      >
        ← Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[35px] shadow-xl">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover hover:scale-105 transition duration-500"
          />

        </div>

        {/* DETAILS */}
        <div>

          <p className="text-pink-500 font-semibold mb-4">
            Premium Collection ✨
          </p>

          <h1 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-3xl text-pink-500 font-bold mb-6">
            {product.price}
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            {product.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            {/* ADD TO CART */}
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg transition hover:scale-105"
            >
              Add to Cart 🛍️
            </button>

            {/* WISHLIST */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-8 py-4 rounded-full border transition ${
                isWishlisted
                  ? "bg-pink-100 text-pink-600 border-pink-300"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {isWishlisted
                ? "❤️ Wishlisted"
                : "🤍 Wishlist"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;