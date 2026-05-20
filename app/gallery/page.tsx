import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/gallery/photo1.jpeg",
    "/gallery/photo2.jpeg",
    "/gallery/photo3.jpeg",
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Gallery / गैलरी</h1>

      <p className="mt-3 text-gray-700">
        हमारे Washing & Servicing work की कुछ photos और video नीचे दिए गए हैं।
      </p>

      {/* Photos */}
      <h2 className="text-2xl font-bold text-sky-800 mt-10">
        Photos / फोटो
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <Image
              src={img}
              alt={`Gallery Photo ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Video */}
      <h2 className="text-2xl font-bold text-sky-800 mt-14">
        Video / वीडियो
      </h2>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6">
        <video controls className="w-full h-[400px] object-cover">
          <source src="/gallery/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}