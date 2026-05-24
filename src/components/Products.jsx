import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  const { addToCart, toggleWishlist } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Floral", "Pink", "Beige"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="px-6 md:px-16 py-20 bg-white">

      {/* TITLE */}
      <div className="text-center mb-14">

        <p className="text-pink-500 font-semibold mb-3">
          Our Collection
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-10">
          Trending Kurtis ✨
        </h2>

        {/* SEARCH */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap mt-6">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#FFF8F5] rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 group"
          >

            {/* IMAGE */}
            <Link to={`/product/${product.id}`}>
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            </Link>

            {/* DETAILS */}
            <div className="p-6 flex flex-col gap-3">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>

                <span className="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <p className="text-pink-500 font-bold text-lg">
                {product.price}
              </p>

              {/* BUTTONS */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition"
              >
                🛍️ Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-full border border-pink-400 text-pink-500 py-2 rounded-full hover:bg-pink-100 transition"
              >
                ❤️ Wishlist
              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Products;