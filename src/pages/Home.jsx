import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#FFF8F5]">

      {/* 🔥 HERO SECTION (FIXED) */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* HERO IMAGE (FIXED FIT) */}
        <img
          src="/hero.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <div className="relative text-white px-6 z-10">

          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            SRILI COLLECTION ✨
          </h1>

          <p className="mt-4 text-lg md:text-2xl">
            Elegant Kurtis for Modern Women
          </p>

          <Link to="/shop">
            <button className="mt-8 bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white text-lg">
              Shop Now 🛍️
            </button>
          </Link>

        </div>

      </section>
{/* 🌸 CATEGORY SECTION */}
<section className="py-20 px-6 md:px-16">

  <h2 className="text-4xl font-serif text-center mb-12">
    Shop by Category
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CATEGORY 1 */}
    <Link to="/shop">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer">
        <img src="/cat1.jpg" className="h-64 w-full object-cover" />
        <div className="p-4 text-center text-xl font-medium">
          Boho Y2K Fashion
        </div>
      </div>
    </Link>

    {/* CATEGORY 2 */}
    <Link to="/shop">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer">
        <img src="/cat2.jpg" className="h-64 w-full object-cover" />
        <div className="p-4 text-center text-xl font-medium">
          Floral Kurtis
        </div>
      </div>
    </Link>

    {/* CATEGORY 3 */}
    <Link to="/shop">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer">
        <img src="/cat3.jpg" className="h-64 w-full object-cover" />
        <div className="p-4 text-center text-xl font-medium">
          Ethnic Design
        </div>
      </div>
    </Link>

  </div>

</section>

      {/* 💖 FEATURE SECTION */}
      <section className="bg-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-serif mb-10">
          Why Choose SRILI?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-semibold">✨ Premium Quality</h3>
            <p className="text-gray-600 mt-2">Best fabrics with modern design</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🚚 Fast Delivery</h3>
            <p className="text-gray-600 mt-2">All India shipping available</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">💖 Customer Love</h3>
            <p className="text-gray-600 mt-2">Thousands of happy buyers</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;