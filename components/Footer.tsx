export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold">
          Ridhi Sidhi Washing and Service Center
        </h2>
        <p className="text-sm mt-2 opacity-90">
          Aligarh Bypass, NH522, Umarpura, Aligarh, Rajasthan 304023
        </p>

        <p className="text-sm mt-2 opacity-90">📞 Phone: 9672101384</p>
        <p className="text-sm opacity-90">🕒 Open: All Days (7 AM - 8 PM)</p>

        <p className="text-sm mt-3 opacity-90">
          Trusted Car, Bike & Tractor Washing and Servicing Center in Aligarh, Rajasthan.
        </p>

        <p className="text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} Ridhi Sidhi Washing and Service Center.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}