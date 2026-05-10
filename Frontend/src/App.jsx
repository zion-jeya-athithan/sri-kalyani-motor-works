function App() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      {/* TOP HEADER */}
      {/* TOP HEADER */}
<div className="w-full bg-zinc-950 border-b border-white/10 text-sm text-gray-300 relative z-50">

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col lg:flex-row justify-between items-center gap-3">

    {/* LEFT SIDE */}
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

      {/* Address */}
      <div className="flex items-center gap-2 hover:text-orange-500 transition">

        <span className="text-orange-500">📍</span>

        <p className="text-sm md:text-[15px]">
          4/43E/5, Om Shanthi Nagar, Tuticorin
        </p>

      </div>

      {/* Working Hours */}
      <div className="flex items-center gap-2 hover:text-orange-500 transition">

        <span className="text-orange-500">🕒</span>

        <p className="text-sm md:text-[15px]">
          Working Hours :
          <span className="font-bold ml-2">
            Mon to Sat (9am - 7pm)
          </span>
        </p>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-5">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/100063835130594/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition text-lg"
      >
        Facebook
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/srikalyanitraders?igsh=MXYxc2t5amNhaHg0dQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition text-lg"
      >
        Instagram
      </a>

    </div>

  </div>

</div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            <span className="text-orange-500">Sri Kalyani</span> Motor Works
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300 font-medium">

            <a href="#" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Services
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[5px] text-orange-500 mb-5 text-sm md:text-base">
              Premium Automobile Workshop
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">

              Modern Care <br />

              For Every <span className="text-orange-500">Vehicle</span>

            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-8 mb-10 max-w-xl">

              Trusted automobile workshop for premium service,
              diagnostics, detailing, repair, maintenance,
              and complete vehicle care with expert technicians.

            </p>

            <div className="flex flex-col sm:flex-row gap-5">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/30">

                Book Service

              </button>

              <button className="border border-white/20 hover:border-orange-500 hover:text-orange-500 transition px-8 py-4 rounded-2xl font-semibold text-lg">

                Explore Services

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Car"
              className="relative rounded-[30px] border border-white/10 shadow-2xl hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-orange-500 mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Premium Workshop Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              ⚙️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Engine Repair
            </h3>

            <p className="text-gray-300 leading-8">
              Complete diagnostics and professional engine repair services.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              🛢️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Oil Service
            </h3>

            <p className="text-gray-300 leading-8">
              High-quality oil replacement and maintenance support.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              🚘
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Vehicle Detailing
            </h3>

            <p className="text-gray-300 leading-8">
              Premium detailing and polishing for showroom-like finish.
            </p>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1400&auto=format&fit=crop"
            alt="Workshop"
            className="rounded-[30px] border border-white/10 shadow-2xl"
          />

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Trusted Workshop Since 2014
            </h2>

            <p className="text-gray-400 leading-9 text-lg mb-8">

              Sri Kalyani Motor Works delivers trusted automobile
              repair and maintenance services with advanced
              technology, expert mechanics, and customer-first care.

            </p>

            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/30">

              Learn More

            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-10">

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <h1 className="text-2xl font-black">
            Sri Kalyani Motor Works
          </h1>

          <p className="text-gray-500 text-center">
            © 2026 Sri Kalyani Motor Works. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App