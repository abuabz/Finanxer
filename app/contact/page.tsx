"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation } from "@/components/animations"
import { useEffect, useState } from "react"
import Image from "next/image"
import NavbarNormal from "@/components/navbarNormal"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroFade = useFadeInOnScroll()
  const contactFade = useFadeInOnScroll()
  const infoStagger = useStaggerAnimation(4, 150)
  const mapFade = useFadeInOnScroll()
  const faqStagger = useStaggerAnimation(4, 100)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header with slide-in animation */}
      <NavbarNormal />

      {/* Hero Section */}
      <section className="py-20 bg-brand-gradient-light">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={heroFade.ref}
            className={`transition-all duration-1000 ${heroFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-5xl font-bold mb-6 text-gradient animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              Have questions about Finanxer? We're here to help. Get in touch with our team and we'll respond within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={contactFade.ref} className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              className={`p-8 card-animate transition-all duration-800 ${contactFade.isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-10"
                }`}
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl animate-fade-in">Send us a message</CardTitle>
                <p className="text-gray-600 animate-fade-in stagger-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up stagger-1">
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input placeholder="John" required className="transition-all duration-300 focus:scale-105" />
                    </div>
                    <div className="animate-fade-in-up stagger-2">
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input placeholder="Doe" required className="transition-all duration-300 focus:scale-105" />
                    </div>
                  </div>
                  <div className="animate-fade-in-up stagger-3">
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="animate-fade-in-up stagger-4">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="animate-fade-in-up stagger-5">
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="animate-fade-in-up stagger-6">
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      placeholder="How can we help you?"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="animate-fade-in-up stagger-7">
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button
                    className="w-full bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift hover-glow animate-fade-in-up stagger-8"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-800 ${contactFade.isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-10"
                }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 animate-fade-in">Get in Touch</h2>
                <p className="text-gray-600 mb-8 animate-fade-in stagger-2">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              <div ref={infoStagger.ref} className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Office Address",
                    content: (
                      <>
                        123 Business Street
                        <br />
                        Suite 100
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </>
                    ),
                    color: "text-brand-primary",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <>
                        Sales: +1 (555) 123-4567
                        <br />
                        Support: +1 (555) 123-4568
                        <br />
                        Toll-free: 1-800-Finanxer
                      </>
                    ),
                    color: "text-brand-secondary",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <>
                        Sales: sales@Finanxer.com
                        <br />
                        Support: support@Finanxer.com
                        <br />
                        General: hello@Finanxer.com
                      </>
                    ),
                    color: "text-brand-secondary",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: (
                      <>
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM PST
                        <br />
                        Sunday: Closed
                        <br />
                        <span className="text-sm text-brand-primary">24/7 support for Enterprise customers</span>
                      </>
                    ),
                    color: "text-brand-secondary",
                  },
                ].map((info, index) => (
                  <Card
                    key={index}
                    className={`p-6 card-animate transition-all duration-600 ${infoStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90"
                      }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start">
                      <info.icon className={`w-6 h-6 ${info.color} mr-4 mt-1 animate-bounce-in hover-scale`} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={mapFade.ref}
            className={`transition-all duration-1000 ${mapFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-xl text-gray-600">Located in the heart of San Francisco's business district</p>
            </div>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center card-animate hover-lift">
              <div className="text-center animate-fade-in">
                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4 animate-bounce-in" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500 mt-2">123 Business Street, Suite 100, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div ref={faqStagger.ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can I get started?",
                answer:
                  "You can sign up and start using Finanxer immediately. Our free plan requires no setup, and paid plans can be activated instantly.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes! We provide email support for all users, priority support for Growth plan customers, and 24/7 dedicated support for Enterprise clients.",
              },
              {
                question: "Can I migrate from my current system?",
                answer:
                  "Absolutely. We offer free migration assistance to help you import your existing data and set up your account properly.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes, we use bank-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className={`p-6 card-animate transition-all duration-600 ${faqStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start">
                  <div className={`w-6 h-6 text-brand-primary mr-4 mt-1 animate-bounce-in hover-scale`}></div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
