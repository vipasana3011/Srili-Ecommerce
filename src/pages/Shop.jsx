import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

function Shop() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((p) => {

    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;

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
          className="w-full md:w-1/2 px-5 py-3 border rounded-full outline-none"
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
          <p className="text-center col-span-full text-gray-500">
            No products found 😭
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group">

                <img
                  src={product.image}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition"
                />

                <div className="p-4">

                  <h3 className="text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-pink-500 font-bold mt-2">
                    {product.price}
                  </p>

                </div>

              </div>
            </Link>
          ))
        )}

      </div>

    </section>
  );
}

export default Shop;