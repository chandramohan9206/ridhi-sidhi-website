import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import ReviewStars from "@/components/ReviewStars";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold leading-tight">
            Ridhi Sidhi Washing and Service Center
          </h1>

          <p className="mt-4 text-lg opacity-95">
              Car | Bike | Tractor Washing & Servicing – Best Quality at Affordable Price
          </p>

          <p className="mt-2 text-lg opacity-95">
              हमारे यहाँ Car, Bike और Tractor की Washing और Servicing की सुविधा उपलब्ध है।
          </p>

          <p className="mt-2 opacity-90">
              हम High Pressure Wash, Foam Wash, Interior Cleaning, Polishing, Coating,
              Oil Change, Repair और Basic Servicing अच्छे और कम दाम में करते हैं।
          </p>

<p className="mt-2 opacity-90">
  Quality Work + Fast Service हमारी पहचान है।
</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:9672101384"
              className="bg-white text-sky-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-green-600"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              target="_blank"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-500"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-sky-800">Our Services</h2>
        <p className="mt-2 text-gray-700">
          Complete Washing, Cleaning and Servicing at best price.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-block bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-sky-800"
          >
            View All Services →
          </Link>
        </div>
      </section>

            {/* WHY CHOOSE US */}
      <section className="bg-sky-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800">
            Why Choose Us? / हमें क्यों चुनें?
          </h2>

          <p className="mt-2 text-gray-700">
            Ridhi Sidhi Washing and Service Center में आपको मिलता है best quality
            washing + servicing at affordable price.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ Affordable Price / कम दाम
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Best quality service with reasonable and customer-friendly
                pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ High Pressure + Foam Wash
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Deep cleaning for mud, dust and stains using modern equipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ Fast Service / जल्दी काम
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Time-saving service with proper finishing and quick delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ Best Cleaning Finish
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Polishing, coating and interior cleaning for premium look.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ Trusted Service Center
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Local trusted center for washing + basic servicing + repair
                work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-sky-700">
                ✅ All Vehicle Service
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Car, Bike और Tractor की complete washing और servicing available.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:9672101384"
              className="bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-sky-800"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-600"
            >
              💬 WhatsApp Booking
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              target="_blank"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-500"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>
      
      {/* PRICE LIST */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800">Price List</h2>
          <p className="mt-2 text-gray-700">
            Exact price depends on vehicle condition. Contact for best rate.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {services.slice(0, 8).map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-sky-50 p-5 rounded-2xl shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>

                <span className="font-bold text-sky-700">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-sky-800">
          Customer Reviews ⭐
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="font-bold">{r.name}</h3>
              <div className="mt-2">
                <ReviewStars count={r.stars} />
              </div>
              <p className="text-sm text-gray-700 mt-3">{r.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING + MAP */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <BookingForm />

          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Aligarh%20Bypass,%20NH522,%20Umarpura,%20Aligarh,%20Rajasthan%20304023&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}