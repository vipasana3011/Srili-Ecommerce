function Login() {
  return (
    <section className="bg-[#FFF8F5] py-20 px-6 flex justify-center">

      <div className="bg-white p-10 rounded-[30px] shadow-md w-full max-w-md">

        <h1 className="text-5xl font-serif text-center text-gray-800 mb-8">
          Welcome Back ✨
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-pink-200 px-5 py-4 rounded-full outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-pink-200 px-5 py-4 rounded-full outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full transition text-lg">
            Login
          </button>

        </div>

      </div>

    </section>
  );
}

export default Login;