import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price.replace("₹", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen bg-[#FFF8F5] px-6 md:px-16 py-20">

      <h1 className="text-5xl font-serif text-center mb-12">
        My Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">
          Your cart is empty 😭  
          <div className="mt-4">
            <Link to="/shop" className="text-pink-500">
              Go Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-white p-5 rounded-2xl shadow"
              >

                <img
                  src={item.image}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-pink-500 font-bold mt-1">
                    {item.price}
                  </p>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-3 text-sm"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* SUMMARY BOX */}
          <div className="bg-white p-6 rounded-2xl shadow h-fit">

            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-6">
              <span>Total Price</span>
              <span className="font-bold text-pink-500">
                ₹{totalPrice}
              </span>
            </div>

            <Link to="/checkout">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full">
                Proceed to Checkout 💳
              </button>
            </Link>

          </div>

        </div>
      )}

    </section>
  );
}

export default Cart;