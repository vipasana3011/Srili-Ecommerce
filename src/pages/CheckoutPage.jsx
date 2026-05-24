import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CheckoutPage() {

  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + Number(item.price.replace("₹", "")) * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen bg-[#FFF8F5] px-6 md:px-16 py-20">

      <h1 className="text-5xl font-serif mb-12">
        Checkout 🧾
      </h1>

      {/* ORDER SUMMARY */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Order Summary
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg">
            Your cart is empty 😭
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4"
              >
                <p>
                  {item.name} × {item.quantity}
                </p>

                <p>
                  ₹{Number(item.price.replace("₹", "")) * item.quantity}
                </p>
              </div>
            ))}

            <hr className="my-4" />

            <h3 className="text-2xl font-bold">
              Total: ₹{totalPrice}
            </h3>
          </>
        )}

      </div>

      {/* PAYMENT FORM */}
      <div className="bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6">
          Payment Details 💳
        </h2>

        <div className="grid gap-4">

          <input
            type="text"
            placeholder="Card Holder Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Card Number"
            className="border p-3 rounded-lg"
          />

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="MM/YY"
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              placeholder="CVV"
              className="border p-3 rounded-lg w-full"
            />

          </div>

          {/* 💅 UPDATED BUTTON */}
          <Link to="/success">
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full text-lg mt-4 w-full transition">
              Pay Now 💅
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CheckoutPage;