
function Blogs() {
  return (
    <>
    <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="dark:bg-gray-900 p-6 rounded-lg shadow">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">Blog Post Title 1</h2>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
            </article>
            <article className="dark:bg-gray-900 p-6 rounded-lg shadow">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">Blog Post Title 2</h2>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
            </article>
            <article className="dark:bg-gray-900 p-6 rounded-lg shadow">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">Blog Post Title 3</h2>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
            </article>
        </div>
    </main>
    </>
  )
}

export default Blogs