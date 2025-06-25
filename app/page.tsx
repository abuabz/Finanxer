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
  StarIcon,
  DollarSign,
  BarChart2,
  FileCheck,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation, useAnimatedCounter } from "@/components/animations"
import { SetStateAction, useEffect, useState } from "react"
import { AnimatedHeader } from "@/components/animated-header"

type Feature = {
  icon: React.ElementType
  title: string
  content: React.ReactNode
  color: string
}

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
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

  const openModal = (feature: SetStateAction<Feature | null>) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFeature(null)
  }

  const features = [
    {
      icon: FileText,
      title: "GST Compliance",
      content: (
        <>
          <p className="text-gray-300 mb-2 text-left">
            Our software takes the complexity out of GST. Automatically generate GST-compliant
            invoices, track input tax credit (ITC), and prepare all your GST returns (GSTR-1, GSTR-3B,
            GSTR-9.) with accuracy. File directly or export data ready for the GST portal, ensuring you
            stay compliant and avoid penalties
          </p>
          <p className="text-gray-300 mb-2 text-left">
            Integrate seamlessly for quick e-invoice and e-way bill creation, ensuring full regulatory
            adherence. Stay updated with the latest GST rules and gain peace of mind with accurate,
            timely compliance.
          </p>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            Keep track of your stock with ease. Our software provides real-time updates on product
            levels, expiry reminders, Batch & Serial Number Tracking, automates reorder alerts, and
            helps prevent stockouts and overstocking, ensuring efficient operations and happy
            customers.
          </p>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: Smartphone,
      title: "Retail / POS Management",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            <strong>Enhance customer service</strong> with our intuitive POS module.
          </p>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-[1px] text-sm">
            <li>Barcode scanning for quick product lookup</li>
            <li>Touch product images for fast selection</li>
            <li>Manual search by name, barcode, or category</li>
            <li>Multiple payment options (cash, card, UPI, etc.)</li>
            <li>Track inventory levels in real-time</li>
            <li>Auto-generated sales and inventory reports</li>
            <li>Process refunds and exchanges easily</li>
          </ul>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: CreditCard,
      title: "Financial Reports",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            <strong>Unlock business Intelligence</strong> with powerful financial reporting
          </p>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-1">
            <li> <b>Profit & Loss (Income Statement):</b> See your revenue, expenses, and net profit over
              any period to gauge profitability.</li>
            <li> <b>Balance Sheet:</b> Get a snapshot of your assets, liabilities, and equity to understand
              your financial position</li>
            <li><b>Cash Flow Statement:</b> Track where your money is coming from and going, ensuring
              healthy liquidity</li>
            <li><b>Customizable Reports: </b>Tailor reports to your specific needs, with filters for period,
              or department. </li>
            <li><b>GST-Ready Reports:</b> All reports align with your GST data for seamless
              reconciliation. Gain the clarity you need to set strategic goals, identify trends, and
              optimize your business performance.
            </li>
          </ul>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: Zap,
      title: "Automation",
      content: (
        <>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-1">
            <li>Auto-send invoices via WhatsApp</li>
            <li>Sending reminders to customers for payment dues</li>
            <li>Auto alert for stock expiry and stockouts</li>
            <li>Sending daily closing report to the authorised person</li>
          </ul>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: DollarSign,
      title: "Multiple Payment Options",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            Flexible Payments, Faster Collections. Offer your customers the convenience of paying how
            they want. Our software supports a wide range of payment methods, making it easier for
            you to get paid faster and reconcile payments seamlessly.
          </p>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-1">
            <li>Accept UPI, bank transfers, and cards</li>
            <li>Support cheques and cash payments</li>
            <li>Integrate with payment gateways</li>
          </ul>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: BarChart2,
      title: "In-built Dashboard",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            Get an instant, crystal-clear overview of your business's financial health the moment you log
            in. Our in-built dashboard presents key metrics like your <b>current cash & bank balance,
              outstanding receivables, pending payables, stock levels, and top-line revenue</b> in an easyto-digest format. No more digging through reports—just quick, actionable insights that help
            you stay on top of your finances and make smarter decisions, every single day.
          </p>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: Cloud,
      title: "Cloud Sync with Online & Offline Access",
      content: (
        <>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-1">
            <li>Your entire accounting database is continuously and automatically synced to our
              highly secure cloud servers. This means every invoice, every transaction, and every
              report is instantly backed up.</li>
            <li>With an internet connection, access your full accounting system from any device
              from anywhere</li>
            <li>Our software allows you to work seamlessly offline. Continue creating invoices,
              recording expenses, and managing your inventory even without an internet
              connection. Once you're back online, all your offline work automatically syncs to the
              cloud, ensuring your records are always up-to-date and consistent across all devices.</li>
          </ul>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: Globe,
      title: "Eliminate Language Barriers in Your Finances.",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            Operate your accounting software in your preferred language for enhanced clarity and team
            productivity. Ensure consistent understanding and smooth financial operations across your
            diverse workforce.
          </p>
        </>
      ),
      color: "text-brand-secondary",
    },
    {
      icon: FileCheck,
      title: "Turn UAE VAT Complexity into Simplicity",
      content: (
        <>
          <p className="text-gray-300 mb-2">
            Managing Value Added Tax in the UAE can be a
            challenging task for businesses. Our accounting software is built to alleviate this burden. It
            automatically categorizes transactions, applies the correct VAT rates, calculates your exact
            tax liability, and helps you generate precise, FTA-ready returns. Minimize errors, avoid
            penalties, and reclaim your valuable time, ensuring your business stays fully compliant with
            all UAE VAT regulations with minimal effort
          </p>
        </>
      ),
      color: "text-brand-secondary",
    },
  ]

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
                {/* Rotating hero image: switches between mockupimg.png and mockupimgdesk.png every 3 seconds */}
                {(() => {
                const images = [
                  { src: "/mockupimgdesk.png", alt: "Finanxer Dashboard" },
                  { src: "/mockupimg.png", alt: "Finanxer Mobile" },
                ]
                const [current, setCurrent] = useState(0)
                useEffect(() => {
                  const interval = setInterval(() => {
                  setCurrent((prev) => (prev + 1) % images.length)
                  }, 3000)
                  return () => clearInterval(interval)
                }, [])
                return (
                  <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-4 md:p-8 hover-lift animate-float border border-white/20 max-w-sm mx-auto ">
                  <Image
                    src={images[current].src}
                    alt={images[current].alt}
                    width={300}
                    height={200}
                    className="rounded-lg transition-transform duration-500 hover:scale-105 w-full max-w-96 h-auto"
                    key={images[current].src}
                  />
                  </div>
                )
                })()}
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
              {[1, 2, 3, 1, 2].map((i) => (
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
              Finanxer is designed for entrepreneurs and small businesses, to  transforms complex accounting into a simple, manageable process. Get accurate financial data, effortlessly handle GST, and gain a clear picture of your cash flow, all in one place.
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
          <div ref={statsStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 text-center">
            {[
              {
                icon: CreditCard,
                title: "POS Facility",
                desc: "Integrated Point of Sale",
              },
              {
                icon: Smartphone,
                title: "Android & iOS App",
                desc: "Mobile Application",
              },
              {
                icon: StarIcon,
                title: "4.8/5",
                desc: "Play Store Rating",
              },
              {
                icon: Cloud,
                title: "Multi-Device",
                desc: "APK & Desktop",
              },
              {
                icon: Users,
                title: "Multi User Access",
                desc: "Access by Multiple Users",
              },
              {
                icon: Globe,
                title: "Multi Language",
                desc: "Supports Multiple Languages",
              },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className={`transition-all duration-600 ${statsStagger.visibleItems.includes(1) ? "" : "translate-y-10"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 animate-bounce-in opacity-80" />
                <div className="text-xl font-bold mb-2">{stat.title}</div>
                <div className="text-blue-100">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features with enhanced animations and modal */}
      <section className="py-20 relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-white">Key Features</h2>
            <p className="text-xl text-gray-300">Comprehensive tools to streamline your billing operations</p>
          </div>
          <div ref={keyFeaturesStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-600 hover-lift hover:bg-black/45 cursor-pointer ${keyFeaturesStagger.visibleItems.includes(1)
                  ? "animate-fade-in-up bg-brand-primary/60 p-4 rounded-md"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(feature)}
              >
                <feature.icon className={`w-16 h-16 ${feature.color} mx-auto mb-4 animate-bounce-in hover-scale`} />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <div className="line-clamp-6 text-gray-300">
                  {feature.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Feature Details */}
      {isModalOpen && selectedFeature && (
        <div onClick={closeModal} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in backdrop-blur-sm ">
          <div className="bg-black/50 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto relative animate-scale-in ">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-200 hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center mb-4">
              <selectedFeature.icon className={`w-12 h-12 ${selectedFeature.color} mr-4`} />
              <h2 className="text-2xl font-bold text-gray-300">{selectedFeature.title}</h2>
            </div>
            <div className="text-gray-600">{selectedFeature.content}</div>
          </div>
        </div>
      )}

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