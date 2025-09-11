"use client";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">AgriOx Farm</h3>
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
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition">Organic Farming</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">Crop Rotation</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">Soil Management</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">Eco Solutions</a>
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

        {/* Footer bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} AgriOx Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
