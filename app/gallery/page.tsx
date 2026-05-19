export default function GalleryPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Gallery</h1>

      <p className="mt-3 text-gray-700">
        Upload your washing and servicing photos here.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-56 flex items-center justify-center bg-gray-200 text-gray-500 font-semibold">
              Photo {item}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-sky-800">
          How to Add Real Photos?
        </h2>
        <p className="text-gray-700 mt-2">
          Put images inside <b>public/gallery/</b> folder.
        </p>
        <p className="text-gray-700 mt-2">
          Example: <b>public/gallery/car1.jpg</b>
        </p>
      </div>
    </main>
  );
}