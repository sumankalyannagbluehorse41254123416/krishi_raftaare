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
              <p>Providing farming solutions for over 6,000 farmers.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                 <li>
                  <a href="#services" className="hover:text-primary transition">High-Yield Seeds</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">Fertilizers & Pesticides</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">Weather Reports</a>
                </li>
              
                <li>
                  <a href="#services" className="hover:text-primary transition">Market Access</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Yogitha Biofarming Pvt Ltd</li>
                <li><a href="#"> info@krishiraftaar.com</a> </li>
                <li>+91-7601841610</li>
                <li>Taljuli, Kharagpur, West Bengal – 721301</li>
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
