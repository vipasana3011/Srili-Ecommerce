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
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">

          {["All", "Floral", "Pink", "Beige"].map((category) => (

           <div className="flex gap-3 mt-4">

  <button
    onClick={() => addToCart(product)}
    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition"
  >
    Add 🛍️
  </button>

  <button
    onClick={() => toggleWishlist(product)}
    className="px-4 border border-pink-400 text-pink-500 rounded-full hover:bg-pink-100 transition"
  >
    ❤️
  </button>

</div>
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

            {/* IMAGE LINK */}
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
            <div className="p-6">

              <div className="flex items-center justify-between mb-3">

                <h3 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h3>

                <span className="text-sm bg-pink-100 text-pink-500 px-3 py-1 rounded-full">
                  {product.category}
                </span>

              </div>

              <p className="text-pink-500 font-bold text-2xl mb-6">
                {product.price}
              </p>

              {/* BUTTONS */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition hover:scale-105"
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-full mt-3 border border-pink-400 text-pink-500 py-2 rounded-full hover:bg-pink-100 transition"
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