import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Contact Us</h1>

      <p className="mt-3 text-gray-700">
        For Booking & Enquiry / Booking और जानकारी के लिए Call या WhatsApp करें।
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-800">Our Details</h2>

          <p className="mt-4 text-gray-700">
            📍 Aligarh Bypass, NH522, Umarpura, Aligarh, Rajasthan 304023
          </p>

          <p className="mt-2 text-gray-700">📞 Phone: 9672101384</p>

          <p className="mt-2 text-gray-700">🕒 Open: All Days (7 AM - 8 PM)</p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="tel:9672101384"
              className="bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-sky-800"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-600"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-500"
            >
              📍 Directions
            </a>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-sky-800">Google Maps Link:</h3>
            <p className="text-sm text-gray-600 break-words mt-1">
              https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8
            </p>
          </div>
        </div>

        <BookingForm />
      </div>

      <div className="mt-10 rounded-2xl overflow-hidden shadow-md bg-white">
        <iframe
          title="Ridhi Sidhi Washing and Service Center Location"
          src="https://www.google.com/maps?q=Aligarh%20Bypass,%20NH522,%20Umarpura,%20Aligarh,%20Rajasthan%20304023&output=embed"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}