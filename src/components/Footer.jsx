import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#FFF8F5] border-t border-pink-200 mt-20">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-14 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h1 className="text-3xl font-serif text-pink-500">
            SRILI ✨
          </h1>

          <p className="text-gray-600 mt-4 leading-6">
            Elegant ethnic wear for modern women.  
            Style, comfort & confidence in every outfit 💖
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Links
          </h2>

          <div className="flex flex-col gap-2 text-gray-600">

            <Link className="hover:text-pink-500 transition" to="/">Home</Link>
            <Link className="hover:text-pink-500 transition" to="/shop">Shop</Link>
            <Link className="hover:text-pink-500 transition" to="/about">About</Link>
            <Link className="hover:text-pink-500 transition" to="/checkout">Checkout</Link>

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Contact
          </h2>

          <div className="text-gray-600 flex flex-col gap-2">

            <p>📞 +91 98765 43210</p>
            <p>📧 support@srili.com</p>
            <p>📍 India</p>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-pink-100"></div>

      {/* BOTTOM BAR */}
      <div className="text-center py-5 text-gray-500 text-sm">

        © {new Date().getFullYear()} SRILI. All rights reserved.  
        <span className="text-pink-500 font-medium"> Made with 💖</span>

      </div>

    </footer>
  );
}

export default Footer;