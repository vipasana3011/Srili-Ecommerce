import { useState, useContext } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Shop() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart, toggleWishlist } = useContext(CartContext);

  const filteredProducts = products.filter((p) => {

    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      p.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="min-h-screen bg-[#FFF8F5] px-6 md:px-16 py-20">

      {/* TITLE */}
      <h1 className="text-5xl font-serif text-center mb-10">
        Shop All Products 🛍️
      </h1>

      {/* SEARCH */}
      <div className="flex justify-center mb-8">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 border rounded-full outline-none focus:border-pink-500"
        />

      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">

        {["All", "Floral", "Ethnic", "Modern"].map((cat) => (

          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProducts.length === 0 ? (

          <p className="text-center col-span-full text-gray-500 text-xl">
            No products found 😭
          </p>

        ) : (

          filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-500 group"
            >

              {/* IMAGE */}
              <Link to={`/product/${product.id}`}>

                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

              </Link>

              {/* DETAILS */}
              <div className="p-5">

                {/* PRODUCT NAME */}
                <Link to={`/product/${product.id}`}>

                  <h3 className="text-xl font-semibold hover:text-pink-500 transition cursor-pointer">
                    {product.name}
                  </h3>

                </Link>

                {/* CATEGORY */}
                <p className="text-sm text-gray-500 mt-1">
                  {product.category}
                </p>

                {/* PRICE */}
                <p className="text-pink-500 font-bold text-lg mt-3">
                  {product.price}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 mt-5">

                  {/* ADD TO CART */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition"
                  >
                    Add To Cart 🛍️
                  </button>

                  {/* WISHLIST */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="w-full border border-pink-500 text-pink-500 py-3 rounded-full hover:bg-pink-50 transition"
                  >
                    Wishlist ❤️
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default Shop;