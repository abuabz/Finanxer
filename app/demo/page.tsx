"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation } from "@/components/animations"
import { useEffect, useState } from "react"
import Image from "next/image"
import NavbarNormal from "@/components/navbarNormal"
import Footer from "@/components/footer"

export default function DemoPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroFade = useFadeInOnScroll()
  const formFade = useFadeInOnScroll()
  const benefitsStagger = useStaggerAnimation(3, 200)
  const testimonialsStagger = useStaggerAnimation(3, 150)

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
            <h1 className="text-5xl font-bold mb-6 text-gradient animate-fade-in">Request a Demo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              See Finanxer in action. Schedule a personalized demo with our team and discover how we can transform your
              billing process.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={formFade.ref} className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card
              className={`p-8 card-animate transition-all duration-800 ${formFade.isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-10"
                }`}
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl animate-fade-in">Schedule Your Demo</CardTitle>
                <p className="text-gray-600 animate-fade-in stagger-2">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your demo.
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
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="animate-fade-in-up stagger-4">
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input
                      placeholder="Your Company"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="animate-fade-in-up stagger-5">
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="animate-fade-in-up stagger-6">
                    <label className="block text-sm font-medium mb-2">Company Size</label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="animate-fade-in-up stagger-7">
                    <label className="block text-sm font-medium mb-2">Preferred Demo Time</label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="animate-fade-in-up stagger-8">
                    <label className="block text-sm font-medium mb-2">Tell us about your billing needs</label>
                    <Textarea
                      placeholder="What challenges are you facing with your current billing system? What features are most important to you?"
                      rows={4}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button
                    className="w-full bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift hover-glow animate-fade-in-up stagger-9"
                    size="lg"
                  >
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Demo Benefits */}
            <div
              className={`space-y-8 transition-all duration-800 ${formFade.isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-10"
                }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 animate-fade-in">What to Expect</h2>
                <div ref={benefitsStagger.ref} className="space-y-6">
                  {[
                    {
                      icon: Calendar,
                      title: "30-Minute Personalized Demo",
                      desc: "Our product expert will walk you through Finanxer's features tailored to your specific needs.",
                      color: "text-brand-primary",
                    },
                    {
                      icon: Users,
                      title: "Q&A Session",
                      desc: "Ask questions about features, pricing, implementation, and how Finanxer fits your workflow.",
                      color: "text-brand-secondary",
                    },
                    {
                      icon: Clock,
                      title: "Custom Implementation Plan",
                      desc: "Get a roadmap for implementing Finanxer in your organization with timeline and best practices.",
                      color: "text-brand-secondary",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className={`flex items-start transition-all duration-600 ${benefitsStagger.visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                        }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <benefit.icon className={`w-6 h-6 ${benefit.color} mr-4 mt-1 animate-bounce-in hover-scale`} />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-brand-gradient-light border-brand-primary card-animate animate-scale-in">
                <h3 className="text-xl font-semibold mb-4 animate-fade-in">Demo Highlights</h3>
                <ul className="space-y-2">
                  {[
                    "Invoice creation and customization",
                    "Payment processing and tracking",
                    "Subscription management",
                    "Analytics and reporting",
                    "Customer portal",
                    "Integration capabilities",
                  ].map((highlight, index) => (
                    <li key={highlight} className={`flex items-center animate-fade-in stagger-${index + 1}`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with stagger animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">See why businesses choose Finanxer for their billing needs</p>
          </div>
          <div ref={testimonialsStagger.ref} className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Finanxer transformed our billing process. We went from spending hours on invoices to having everything automated. The demo showed us exactly what we needed.",
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                initials: "SJ",
                color: "bg-brand-primary",
              },
              {
                quote:
                  "The demo was incredibly helpful. The team understood our needs and showed us exactly how Finanxer would solve our subscription billing challenges.",
                name: "Michael Chen",
                role: "CFO, GrowthCorp",
                initials: "MC",
                color: "bg-brand-secondary",
              },
              {
                quote:
                  "Implementation was smooth after the demo. The team provided excellent support and we were up and running in no time. Highly recommend!",
                name: "Emily Rodriguez",
                role: "Operations Manager, ScaleUp",
                initials: "ER",
                color: "bg-brand-secondary",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`p-6 card-animate transition-all duration-600 ${testimonialsStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 animate-fade-in">"{testimonial.quote}"</p>
                  <div className="flex items-center animate-fade-in stagger-2">
                    <div
                      className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center mr-3 hover-scale`}
                    >
                      <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with slide-up animation */}
     <Footer/>
    </div>
  )
}
