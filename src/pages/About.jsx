function About() {
  return (
    <div className="bg-[#FFF8F5] min-h-screen px-6 md:px-16 py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>

          <h1 className="text-5xl font-serif text-gray-800 mb-6">
            About SRILI ✨
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            SRILI is a modern fashion brand created for women who love elegance,
            comfort, and style. Our kurtis are designed with premium fabrics and
            beautiful patterns that make you feel confident every day.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            We believe fashion should be simple yet powerful. Every piece is
            carefully crafted to give you a perfect blend of tradition and
            modern fashion trends.
          </p>

          <div className="flex gap-6 mt-8">

            <div>
              <h3 className="text-3xl font-bold text-pink-500">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">500+</h3>
              <p className="text-gray-600">Designs</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">4.8★</h3>
              <p className="text-gray-600">Rating</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">

          <img
            src="/about.jpg"
            alt="About SRILI"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          {/* small overlay card */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow">

            <p className="text-sm text-gray-600">
              ✨ Premium Fashion Brand
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;