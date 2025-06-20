import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function NavbarNormal() {
    const [isLoaded, setIsLoaded] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

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
                <nav className="hidden md:flex items-center space-x-8">
                    {["Home", "About", "Products", "Pricing", "Demo", "Contact"].map((item, index) => {
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
                <div className="flex items-center space-x-4">
                    <Button asChild className="bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift">
                        <Link href="/demo">Get started</Link>
                    </Button>
                    <Button variant="outline" asChild className="hover-lift">
                        <Link href="/contact">Contact sales</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
