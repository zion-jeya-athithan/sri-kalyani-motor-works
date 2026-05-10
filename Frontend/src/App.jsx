function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

        <div className="flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold tracking-wide text-orange-500">
            Sri Kalyani Motor Works
          </h1>

          <div className="space-x-8 hidden md:flex text-gray-300 font-medium">

            <a
              href="#"
              className="relative hover:text-orange-500 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>

            <a
              href="#services"
              className="relative hover:text-orange-500 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="relative hover:text-orange-500 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="relative hover:text-orange-500 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>

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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl">

          <p className="text-orange-500 uppercase tracking-[6px] mb-5 text-sm">
            Premium Automobile Care
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent">
            Drive With Confidence
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-8">
            Expert vehicle servicing, engine diagnostics, brake repair,
            premium maintenance, and trusted automobile solutions
            for modern drivers.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105">
              Book Service
            </button>

            <button className="border border-gray-600 hover:border-orange-500 hover:text-orange-500 px-10 py-4 rounded-2xl text-lg transition duration-300 hover:scale-105">
              Explore Services
            </button>

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-8 md:px-16 py-28 bg-zinc-950"
      >

        <div className="text-center mb-20">

          <p className="text-orange-500 uppercase tracking-[4px] mb-3">
            What We Offer
          </p>

          <h2 className="text-5xl font-bold">
            Premium Services
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-orange-500 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">

            <div className="text-6xl mb-6">
              ⚙️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Engine Repair
            </h3>

            <p className="text-gray-400 leading-8">
              Advanced engine diagnostics and repair services
              using modern tools and experienced mechanics.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-orange-500 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">

            <div className="text-6xl mb-6">
              🛢️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Oil Service
            </h3>

            <p className="text-gray-400 leading-8">
              Premium oil replacement and complete vehicle
              maintenance for smoother driving performance.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-orange-500 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">

            <div className="text-6xl mb-6">
              🚗
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Brake Service
            </h3>

            <p className="text-gray-400 leading-8">
              Complete brake inspection and reliable repair
              solutions ensuring maximum driving safety.
            </p>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-28 px-8 md:px-16 bg-black"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-orange-500 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Trusted Automobile Experts
            </h2>

            <p className="text-gray-400 text-lg leading-9">
              Sri Kalyani Motor Works provides premium automobile
              repair and maintenance services with skilled mechanics,
              advanced diagnostics, and customer-first service.
              We ensure quality, reliability, and performance for
              every vehicle we handle.
            </p>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
              alt="Workshop"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-zinc-950">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              10+
            </h2>
            <p className="text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              5000+
            </h2>
            <p className="text-gray-400">
              Vehicles Serviced
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              100%
            </h2>
            <p className="text-gray-400">
              Customer Satisfaction
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-orange-500 mb-3">
              24/7
            </h2>
            <p className="text-gray-400">
              Support
            </p>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 px-8 text-center bg-black"
      >

        <p className="text-orange-500 uppercase tracking-[4px] mb-4">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let’s Service Your Vehicle
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Contact Sri Kalyani Motor Works for premium automobile care.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105">
          Contact Now
        </button>

      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-5 rounded-full shadow-lg text-2xl z-50 transition hover:scale-110"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Sri Kalyani Motor Works. All Rights Reserved.
      </footer>

    </div>
  )
}

export default App