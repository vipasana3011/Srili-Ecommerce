import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function WishlistPage() {

  const { wishlist, addToCart, toggleWishlist } = useContext(CartContext);

  return (
    <section className="min-h-screen bg-[#FFF8F5] px-6 md:px-16 py-20">

      <h1 className="text-5xl font-serif text-center mb-12">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">
          Your wishlist is empty 😭  
          <div className="mt-4">
            <Link to="/shop" className="text-pink-500">
              Go to Shop
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="w-full h-[350px] object-cover"
                />
              </Link>

              <div className="p-4">

                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-pink-500 font-bold mt-2">
                  {product.price}
                </p>

                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm"
                  >
                    Add to Cart 🛍️
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className="border px-4 py-2 rounded-full text-sm"
                  >
                    Remove ❌
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default WishlistPage;