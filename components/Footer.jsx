"use client";

export default function Footer() {
  return (
    <footer className=" text-white ">
      <div className="bg-[var(--deepest-green)] pt-12 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="mb-4">
                <img src="/image/logo.jpg" alt="" className="w-22" />
              </div>
              <p>Providing sustainable agricultural solutions for over 20 years.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Seeds</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition">Fertilizers & Pesticides</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">Weather Reports</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">Soil Management</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">Market Access</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>123 Farm Road, Countryside</li>
                <li>info@agrioxfarm.com</li>
                <li>+1 (123) 456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="border-t border-gray-700 bg-[var(--light-green)]  py-4 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} <a href="https://www.bluehorse.in/" className="underline">BlueHorse Software</a> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
