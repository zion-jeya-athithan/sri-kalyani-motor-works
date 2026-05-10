function App() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Background Glow */}
      {/* TOP HEADER */}
<div className="w-full bg-zinc-950 border-b border-white/10 text-sm text-gray-300">

  <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3">

    {/* Left Side - Address */}
    <div className="flex items-center gap-2 hover:text-orange-500 transition">
      <span className="text-orange-500">📍</span>
      <p>
        Sri Kalyani Motor Works, Chennai, Tamil Nadu
      </p>
    </div>

    {/* Center - Working Hours */}
    <div className="flex items-center gap-2 hover:text-orange-500 transition">
      <span className="text-orange-500">🕒</span>
      <p>
        Mon - Sat : 9:00 AM - 8:00 PM
      </p>
    </div>

    {/* Right Side - Social Media */}
    <div className="flex items-center gap-5">

      <a
        href="#"
        className="hover:text-orange-500 transition text-lg"
      >
        Facebook
      </a>

      <a
        href="#"
        className="hover:text-orange-500 transition text-lg"
      >
        Instagram
      </a>

      <a
        href="#"
        className="hover:text-orange-500 transition text-lg"
      >
        WhatsApp
      </a>

    </div>

  </div>

</div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-orange-500">Sri Kalyani</span> Motor Works
          </h1>

          <div className="hidden md:flex space-x-10 text-gray-300 font-medium">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[6px] text-orange-500 mb-5">
              Premium Automobile Workshop
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Luxury Care <br />
              For Every <span className="text-orange-500">Vehicle</span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 mb-10 max-w-xl">
              We provide premium automobile repair, diagnostics,
              maintenance, detailing, and performance upgrades
              with trusted expert mechanics and modern technology.
            </p>

            <div className="flex gap-5">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/30">
                Book Service
              </button>

              <button className="border border-white/20 hover:border-orange-500 hover:text-orange-500 transition px-8 py-4 rounded-2xl font-semibold text-lg">
                Explore
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"
              alt="car"
              className="relative rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-orange-500 mb-3">
              10+
            </h2>

            <p className="text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-orange-500 mb-3">
              5K+
            </h2>

            <p className="text-gray-400">
              Vehicles Serviced
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-orange-500 mb-3">
              24/7
            </h2>

            <p className="text-gray-400">
              Customer Support
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-orange-500 mb-3">
              100%
            </h2>

            <p className="text-gray-400">
              Trusted Service
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-center mb-20">

          <p className="text-orange-500 tracking-[5px] uppercase mb-4">
            Our Expertise
          </p>

          <h2 className="text-5xl font-black">
            Premium Services
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              ⚙️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Engine Repair
            </h3>

            <p className="text-gray-300 leading-8">
              Advanced diagnostics and complete engine
              repair with modern equipment.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              🛢️
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Oil Service
            </h3>

            <p className="text-gray-300 leading-8">
              Premium oil replacement and maintenance
              solutions for all vehicles.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-orange-500 transition duration-500">

            <div className="text-6xl mb-6">
              🚘
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Performance Upgrade
            </h3>

            <p className="text-gray-300 leading-8">
              Improve vehicle power, handling,
              and driving experience professionally.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 mt-20">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

          <h1 className="text-2xl font-bold">
            Sri Kalyani Motor Works 
          </h1>

          <p className="text-gray-500 mt-4 md:mt-0">
           Sri Kalyani Motor Works © 1985 All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App