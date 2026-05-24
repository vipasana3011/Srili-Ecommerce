function Newsletter() {
  return (
    <section className="bg-pink-100 py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-pink-500 font-semibold mb-4">
          Stay Updated ✨
        </p>

        <h1 className="text-5xl font-serif text-gray-800 mb-6">
          Join Our Fashion Newsletter
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Get updates about new collections, exclusive offers
          and trendy styles.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full w-full md:w-[400px] outline-none"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;