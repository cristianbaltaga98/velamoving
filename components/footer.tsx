"use client"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">VelaMoving</h3>
            <p className="text-sm opacity-75">Professional removal services across the UK</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Storage
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Phone: 020 1234 5678</li>
              <li>Email: info@velamoving.uk</li>
              <li>Hours: Mon-Fri 8am-6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 VelaMoving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
