function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-orange-500">
          Sri Kalyani Motor Works
        </h1>

        <div className="space-x-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-5">
        <h2 className="text-6xl font-extrabold mb-6">
          Premium Automobile Workshop
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mb-8">
          Expert vehicle service, repair, maintenance, and diagnostics
          with trusted mechanics and premium care.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Book Service
        </button>
      </section>

      {/* Services */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-orange-500">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Engine Repair
            </h3>

            <p className="text-gray-400">
              Complete engine diagnostics and repair services.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Oil Service
            </h3>

            <p className="text-gray-400">
              High-quality oil replacement and maintenance service.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Brake Service
            </h3>

            <p className="text-gray-400">
              Reliable brake inspection and repair solutions.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App