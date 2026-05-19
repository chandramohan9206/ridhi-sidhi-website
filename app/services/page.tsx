import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Our Services</h1>

      <p className="mt-3 text-gray-700">
         हमारे यहाँ modern equipment के साथ professional washing और servicing की जाती है। Customer satisfaction हमारी priority है।
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-gray-900">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
            <p className="mt-3 font-bold text-sky-700">{service.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}