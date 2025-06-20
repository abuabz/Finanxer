"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Demo", href: "/demo" }
  ]

  return (
    <>
      {/* Animated Background Lines - Enhanced */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary opacity-90">
          {/* Horizontal Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
              style={{
                top: `${12.5 * (i + 1)}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            />
          ))}

          {/* Vertical Lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
              style={{
                left: `${16.66 * (i + 1)}%`,
                top: 0,
                bottom: 0,
                animationDelay: `${i * 0.7}s`,
                animationDuration: "4s",
              }}
            />
          ))}

          {/* Moving Light Particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`light-${i}`}
              className="absolute w-2 h-2 bg-white/60 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: "6s",
              }}
            />
          ))}

          {/* Traveling Light Beams */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={`beam-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-travel-horizontal"
                style={{
                  top: `${25 + i * 25}%`,
                  width: "200px",
                  animationDelay: `${i * 3}s`,
                  animationDuration: "8s",
                }}
              />
            ))}
          </div>

          {/* Grid Background Effect */}
          <div className="absolute inset-0 grid-background opacity-30" />
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? "bg-brand-primary/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2"
          : "bg-[#ffffff00]   py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Finanxer Logo"
                  width={24}
                  height={24}
                  className="transition-all duration-700 ease-in-out animate-pulse-slow"
                />
                <span className="text-lg font-bold text-white">Finanxer</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute top-full left-0 right-0 bg-brand-primary/95 backdrop-blur-md border-t border-white/20 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <div className="px-4 py-6">
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-white/90 hover:text-white transition-all duration-300 py-2 hover:bg-white/10 rounded-lg px-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-white/30 text-white hover:bg-white hover:text-brand-primary backdrop-blur-sm"
                    >
                      <Link href="/demo">Get started</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-cyan-500 hover:bg-cyan-400 text-brand-primary font-semibold shadow-lg"
                    >
                      <Link href="/contact">Contact sales</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Desktop Logo - Always on Left */}
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Finanxer Logo"
                  width={isScrolled ? 32 : 50}
                  height={isScrolled ? 32 : 50}
                  className="transition-all duration-700 ease-in-out animate-pulse-slow group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <span
                className={`font-bold text-white transition-all duration-700 ease-in-out group-hover:text-cyan-300 ${isScrolled ? "text-lg" : "text-2xl"
                  }`}
              >
                Finanxer
              </span>
            </div>

            {/* Desktop Navigation - Always on Right */}
            <div className="flex items-center space-x-8">
              {/* Navigation Links with Glassmorphism */}
              <nav className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 shadow-lg">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 relative group px-4 py-2 rounded-full hover:bg-white/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                ))}

                <div className="flex items-center space-x-3">

                  <Button
                    asChild
                    size={isScrolled ? "sm" : "default"}
                    className="bg-cyan-500 hover:bg-cyan-400 text-brand-primary font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group rounded-xl"
                  >
                    <Link href="/contact">
                      <span className="relative z-10">Request Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </Button>
                </div>
              </nav>

              {/* Desktop CTA Buttons with Enhanced Effects */}

            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </header>
    </>
  )
}
