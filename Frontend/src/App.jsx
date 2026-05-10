function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">
        <div className="flex justify-between items-center px-8 py-5">
          <h1 className="text-3xl font-extrabold tracking-wide text-orange-500">
            Sri Kalyani Motor Works
          </h1>

          <div className="space-x-8 hidden md:flex text-gray-300 font-medium">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Services</a>
            <a href="#" className="hover:text-orange-500 transition">About</a>
            <a href="#" className="hover:text-orange-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">

          <p className="text-orange-500 uppercase tracking-[6px] mb-5 text-sm">
            Premium Automobile Care
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Drive With <span className="text-orange-500">Confidence</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Expert vehicle servicing, diagnostics, engine repair,
            and premium maintenance solutions with trusted mechanics.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-orange-500/30">
              Book Service
            </button>

            <button className="border border-gray-600 hover:border-orange-500 hover:text-orange-500 px-10 py-4 rounded-2xl text-lg transition duration-300">
              Explore Services
            </button>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 py-24 bg-zinc-950">

        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[4px] mb-3">
            What We Offer
          </p>

          <h2 className="text-5xl font-bold">
            Premium Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-zinc-900/80 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2">

            <div className="text-5xl mb-6">⚙️</div>

            <h3 className="text-3xl font-bold mb-4">
              Engine Repair
            </h3>

            <p className="text-gray-400 leading-7">
              Advanced engine diagnostics, repair, and performance
              optimization with modern tools and expert technicians.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/80 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2">

            <div className="text-5xl mb-6">🛢️</div>

            <h3 className="text-3xl font-bold mb-4">
              Oil Service
            </h3>

            <p className="text-gray-400 leading-7">
              Premium quality oil replacement and complete vehicle
              maintenance for smooth and efficient performance.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/80 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2">

            <div className="text-5xl mb-6">🚗</div>

            <h3 className="text-3xl font-bold mb-4">
              Brake Service
            </h3>

            <p className="text-gray-400 leading-7">
              Reliable brake inspection, maintenance, and repair
              solutions for maximum driving safety.
            </p>

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-black">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              10+
            </h2>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              5000+
            </h2>
            <p className="text-gray-400">Vehicles Serviced</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              100%
            </h2>
            <p className="text-gray-400">Customer Satisfaction</p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              24/7
            </h2>
            <p className="text-gray-400">Support</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Sri Kalyani Motor Works. All Rights Reserved.
      </footer>

    </div>
  )
}

export default App