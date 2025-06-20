"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Shield,
  Cloud,
  Zap,
  Users,
  Target,
  Globe,
  Clock,
  CreditCard,
  BarChart3,
  FileText,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation, useAnimatedCounter } from "@/components/animations"
import { useEffect, useState } from "react"
import { AnimatedHeader } from "@/components/animated-header"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroFade = useFadeInOnScroll()
  const partnersFade = useFadeInOnScroll()
  const aboutFade = useFadeInOnScroll()
  const featureStagger = useStaggerAnimation(4, 150)
  const statsStagger = useStaggerAnimation(4, 200)
  const keyFeaturesStagger = useStaggerAnimation(4, 100)
  const contactFade = useFadeInOnScroll()

  // Animated counters
  const clientsCounter = useAnimatedCounter(5000)
  const accuracyCounter = useAnimatedCounter(99.9)
  const countriesCounter = useAnimatedCounter(10)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Animated Header */}
      <AnimatedHeader />

      {/* Hero Section with enhanced animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div
            ref={heroFade.ref}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${heroFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 md:ml-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in-left leading-tight">
                Smarter Billing Starts Here
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 animate-fade-in-left stagger-2 max-w-2xl mx-auto lg:mx-0">
                Streamline your invoicing and billing processes with our comprehensive suite of tools. GST ready,
                cloud-backed, and designed for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in-left stagger-3">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-brand-primary font-semibold btn-animate hover-lift hover-glow w-full sm:w-auto"
                  asChild
                >
                  <Link href="/demo">Request Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-black hover:bg-white hover:text-brand-primary hover-lift w-full sm:w-auto"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right stagger-2 order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-4 md:p-8 hover-lift animate-float border border-white/20 max-w-sm mx-auto ">
                <Image
                  src="/mockupimg.png"
                  alt="Finanxer Dashboard"
                  width={300}
                  height={200}
                  className="rounded-lg transition-transform duration-500 hover:scale-105 w-full max-w-96 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners with stagger animation */}
      <section className="py-16 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <div
            ref={partnersFade.ref}
            className={`transition-all duration-800 ${partnersFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-center text-gray-600 mb-8 animate-fade-in">Trusted by Leading Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              {[1, 2, 3,1,2].map((i) => (
                <div key={i} className={`flex justify-center animate-scale-in stagger-${i}`}>
                  <Image
                    src={`/partner${i}.png`} // Dynamically map to partner1.png, partner2.png, partner3.png
                    alt={`Partner ${i}`}
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-500 hover-scale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us with fade animation */}
      <section className="py-16 bg-gray-50 relative z-30">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={aboutFade.ref}
            className={`transition-all duration-800 ${aboutFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">About Finanxer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              Finanxer revolutionizes billing for businesses of all sizes. Our platform is designed to be intuitive,
              powerful, and adaptable to your specific needs, providing exceptional customer support and continuous
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us with stagger animation */}
      <section className="py-20 relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Finanxer?</h2>
            <p className="text-xl text-gray-300">Experience the difference with our robust features</p>
          </div>
          <div ref={featureStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast & Easy Billing",
                desc: "Create and send invoices in seconds with our intuitive interface",
                color: "text-brand-primary",
              },
              {
                icon: CheckCircle,
                title: "GST Ready",
                desc: "Fully compliant with GST regulations and tax requirements",
                color: "text-brand-secondary",
              },
              {
                icon: Cloud,
                title: "Cloud Backup",
                desc: "Your data is safe and accessible from anywhere, anytime",
                color: "text-brand-secondary",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                desc: "Bank-grade security with 99.9% uptime guarantee",
                color: "text-brand-primary",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center p-6 card-animate transition-all duration-500 bg-white/60 backdrop-blur hover:backdrop-blur-0 cursor-pointer ${featureStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90 duration-75"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 animate-bounce-in`} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics with animated counters */}
      <section className="py-20 bg-brand-primary text-white relative z-30">
        <div className="container mx-auto px-4">
          <div ref={statsStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div
              className={`transition-all duration-600 ${statsStagger.visibleItems.includes(0) ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              <Users className="w-12 h-12 mx-auto mb-4 animate-bounce-in" />
              <div ref={clientsCounter.ref} className="text-4xl font-bold mb-2">
                {clientsCounter.count.toLocaleString()}+
              </div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div
              className={`transition-all duration-600 ${statsStagger.visibleItems.includes(1) ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "200ms" }}
            >
              <Target className="w-12 h-12 mx-auto mb-4 animate-bounce-in" />
              <div ref={accuracyCounter.ref} className="text-4xl font-bold mb-2">
                {accuracyCounter.count}%
              </div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div
              className={`transition-all duration-600 ${statsStagger.visibleItems.includes(2) ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "400ms" }}
            >
              <Globe className="w-12 h-12 mx-auto mb-4 animate-bounce-in" />
              <div ref={countriesCounter.ref} className="text-4xl font-bold mb-2">
                {countriesCounter.count}+
              </div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div
              className={`transition-all duration-600 ${statsStagger.visibleItems.includes(3) ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "600ms" }}
            >
              <Clock className="w-12 h-12 mx-auto mb-4 animate-bounce-in" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features with enhanced animations */}
      <section className="py-20 relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-white">Key Features</h2>
            <p className="text-xl text-gray-300">Comprehensive tools to streamline your billing operations</p>
          </div>
          <div ref={keyFeaturesStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Invoicing & Payments",
                desc: "Generate professional invoices and track payment statuses in real-time",
                color: "text-brand-primary",
              },
              {
                icon: BarChart3,
                title: "Reporting & Analytics",
                desc: "Gain insights into your revenue, customer behavior, and performance",
                color: "text-brand-secondary",
              },
              {
                icon: Smartphone,
                title: "Customer Portal",
                desc: "Self-service portal for customers to manage subscriptions and payments",
                color: "text-brand-secondary",
              },
              {
                icon: CreditCard,
                title: "Subscription Management",
                desc: "Manage recurring billing with flexible pricing plans and automation",
                color: "text-brand-secondary",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-600 hover-lift ${keyFeaturesStagger.visibleItems.includes(index) ? "animate-fade-in-up bg-brand-primary/60 p-4 rounded-md" : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className={`w-16 h-16 ${feature.color} mx-auto mb-4 animate-bounce-in hover-scale `} />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with animation */}
      <section className="py-20 bg-gray-50 relative z-30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div
              ref={contactFade.ref}
              className={`text-center mb-12 transition-all duration-800 ${contactFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to transform your billing process? Contact us today!</p>
            </div>
            <Card
              className={`p-8 card-animate transition-all duration-800 ${contactFade.isVisible ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-left stagger-1">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your full name" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="animate-fade-in-right stagger-2">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                <div className="animate-fade-in-up stagger-3">
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input placeholder="Your phone number" className="transition-all duration-300 focus:scale-105" />
                </div>
                <div className="animate-fade-in-up stagger-4">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your billing needs..."
                    rows={4}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <Button
                  className="w-full bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift hover-glow animate-fade-in-up stagger-5"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with slide-up animation */}
      <footer className="bg-gray-900 text-white py-16 animate-slide-in-up relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              {

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
    </div>
  )
}
