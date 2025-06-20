import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function NavbarNormal() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const navItems = ["Home", "About", "Products", "Pricing", "Demo", "Contact"]

    return (
        <header
            className={`border-b bg-brand-primary sticky top-0 z-50 transition-all duration-500 ${isLoaded ? "" : "opacity-0"}`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 hover-scale">
                    <Image src="/logo.png" alt="Finanxer Logo" width={32} height={32} className="animate-pulse-slow" />
                    <Link href="/" className="text-xl text-white font-bold">
                        Finanxer
                    </Link>
                </div>
                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => {
                        const linkPath = item === "Home" ? "/" : `/${item.toLowerCase()}`
                        const isActive = pathname === linkPath
                        return (
                            <Link
                                key={item}
                                href={linkPath}
                                className={`text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in stagger-${index + 1} 
                                    ${isActive ? "text-white font-bold" : ""}`}
                            >
                                {item}
                            </Link>
                        )
                    })}
                </nav>
                {/* Mobile menu button */}
                <button
                    className="md:hidden flex items-center text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild className="bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift">
                        <Link href="/demo">Get started</Link>
                    </Button>
                    <Button variant="outline" asChild className="hover-lift">
                        <Link href="/contact">Contact sales</Link>
                    </Button>
                </div>
            </div>
            {/* Mobile nav */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-brand-primary px-4 pb-4">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item, index) => {
                            const linkPath = item === "Home" ? "/" : `/${item.toLowerCase()}`
                            const isActive = pathname === linkPath
                            return (
                                <Link
                                    key={item}
                                    href={linkPath}
                                    className={`block py-2 px-2 rounded text-gray-200 hover:text-white hover:bg-brand-primary/80 transition-all duration-200
                                        ${isActive ? "text-white font-bold" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            )
                        })}
                        <Button asChild className="w-full mt-2 bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift">
                            <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>Get started</Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full hover-lift">
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact sales</Link>
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    )
}
