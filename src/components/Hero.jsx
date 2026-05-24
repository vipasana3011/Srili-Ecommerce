import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#FFF8F5] gap-12 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >

        <p className="text-pink-500 font-semibold mb-4">
          New Collection ✨
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 leading-tight mb-6">
          Elegant Short Kurtis
          for Everyday Grace
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-8">
          Discover modern ethnic wear designed with elegance,
          comfort and timeless feminine charm.
        </p>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition hover:scale-105">
          Shop Now
        </button>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop"
          alt="fashion"
          className="w-[320px] md:w-[450px] h-[500px] md:h-[600px] object-cover rounded-[40px] shadow-2xl hover:scale-105 transition duration-500"
        />

      </motion.div>

    </section>
  );
}

export default Hero;