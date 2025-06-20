import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-16 animate-slide-in-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "Finanxer",
                content: (
                  <>
                    <div className="flex items-center space-x-2 mb-4 hover-scale">
                      <Image src="/logo.png" alt="Finanxer Logo" width={32} height={32} className="animate-pulse-slow" />
                      <span className="text-xl font-bold">Finanxer</span>
                    </div>
                    <p className="text-gray-400">Smart invoicing and billing solution for modern businesses.</p>
                  </>
                ),
              },
              {
                title: "Quick Links",
                content: (
                  <ul className="space-y-2 text-gray-400">
                    {["Home", "About", "Pricing", "Products", "Contact"].map((link, index) => (
                      <li key={link} className={`animate-fade-in stagger-${index + 1}`}>
                        <Link
                          href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                          className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "Products",
                content: (
                  <ul className="space-y-2 text-gray-400">
                    {["Invoicing", "Payments", "Subscriptions", "Analytics"].map((product, index) => (
                      <li key={product} className={`animate-fade-in stagger-${index + 1}`}>
                        <Link
                          href="/products"
                          className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {product}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "Support",
                content: (
                  <ul className="space-y-2 text-gray-400">
                    {[
                      { name: "Help Center", href: "/contact" },
                      { name: "Request Demo", href: "/demo" },
                      { name: "Contact Support", href: "/contact" },
                    ].map((item, index) => (
                      <li key={item.name} className={`animate-fade-in stagger-${index + 1}`}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map((section, index) => (
              <div key={section.title} className={`animate-fade-in-up stagger-${index + 1}`}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                {section.content}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
            <p className="text-gray-400">© 2024 Finanxer. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
