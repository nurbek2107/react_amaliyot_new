function Servis() {
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Service Name 1</h2>
                <p className="text-gray-700 mb-4">Description of Service 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Service Name 2</h2>
                <p className="text-gray-700 mb-4">Description of Service 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Service Name 3</h2>
                <p className="text-gray-700 mb-4">Description of Service 3 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
        </div>
    </main>
    </>
  )
}

export default Servis;