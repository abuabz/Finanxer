"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, CreditCard, BarChart3, Users, Smartphone, Globe, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation } from "@/components/animations"
import { useEffect, useState } from "react"
import NavbarNormal from "@/components/navbarNormal"
import Footer from "@/components/footer"

export default function ProductsPage() {
  const heroFade = useFadeInOnScroll()
  const productStagger = useStaggerAnimation(4, 300)
  const featuresStagger = useStaggerAnimation(4, 150)
  const ctaFade = useFadeInOnScroll()

  return (
    <div className="min-h-screen">
      {/* Header with slide-in animation */}
      <NavbarNormal/>


      {/* Hero Section */}
      <section className="py-20 bg-brand-gradient-light bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={heroFade.ref}
            className={`transition-all duration-1000 ${
              heroFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl font-bold mb-6 text-gradient animate-fade-in">Complete Billing Suite</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              Everything you need to manage your billing, payments, and customer relationships in one powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products with enhanced animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-brand-primary">Our Core Products</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Discover the essential tools to power your business growth. Each product is designed for simplicity, automation, and insight.
        </p>
          </div>
          <div
        ref={productStagger.ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
        {/* Invoicing */}
        <Card
          className={`flex flex-col items-center text-center p-8 shadow-lg border-0 transition-all duration-700 bg-gradient-to-b from-blue-400/20 via-blue-100 to-white ring-2 ring-blue-200 hover:ring-blue-400 hover:scale-105 hover:shadow-xl ${
            productStagger.visibleItems.includes(0) ? "animate-scale-in" : "opacity-0 scale-90"
          }`}
          style={{ animationDelay: "0ms" }}
        >
          <div className="bg-blue-100 rounded-full p-4 mb-4 shadow-md">
            <FileText className="w-14 h-14 text-brand-primary animate-bounce-in" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-blue-700">Invoicing</h3>
          <p className="text-gray-700 mb-4">
            Create, send, and track professional invoices with ease. Automate reminders and accept payments online.
          </p>
        </Card>
        {/* Subscriptions */}
        <Card
          className={`flex flex-col items-center text-center p-8 shadow-lg border-0 transition-all duration-700 bg-gradient-to-b from-purple-400/20 via-purple-100 to-white ring-2 ring-purple-200 hover:ring-purple-400 hover:scale-105 hover:shadow-xl ${
            productStagger.visibleItems.includes(1) ? "animate-scale-in" : "opacity-0 scale-90"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="bg-purple-100 rounded-full p-4 mb-4 shadow-md">
            <CreditCard className="w-14 h-14 text-purple-500 animate-bounce-in" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-purple-700">Subscriptions</h3>
          <p className="text-gray-700 mb-4">
            Manage recurring revenue with flexible plans, automated billing cycles, and customer self-service.
          </p>
        </Card>
        {/* Analytics */}
        <Card
          className={`flex flex-col items-center text-center p-8 shadow-lg border-0 transition-all duration-700 bg-gradient-to-b from-green-400/20 via-green-100 to-white ring-2 ring-green-200 hover:ring-green-400 hover:scale-105 hover:shadow-xl ${
            productStagger.visibleItems.includes(2) ? "animate-scale-in" : "opacity-0 scale-90"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="bg-green-100 rounded-full p-4 mb-4 shadow-md">
            <BarChart3 className="w-14 h-14 text-green-500 animate-bounce-in" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-green-700">Analytics</h3>
          <p className="text-gray-700 mb-4">
            Visualize your revenue, customers, and growth with real-time dashboards and exportable reports.
          </p>
        </Card>
        {/* Customer Portal */}
        <Card
          className={`flex flex-col items-center text-center p-8 shadow-lg border-0 transition-all duration-700 bg-gradient-to-b from-orange-400/20 via-orange-100 to-white ring-2 ring-orange-200 hover:ring-orange-400 hover:scale-105 hover:shadow-xl ${
            productStagger.visibleItems.includes(3) ? "animate-scale-in" : "opacity-0 scale-90"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-orange-100 rounded-full p-4 mb-4 shadow-md">
            <Users className="w-14 h-14 text-orange-500 animate-bounce-in" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-orange-700">Customer Portal</h3>
          <p className="text-gray-700 mb-4">
            Empower your customers to manage subscriptions, view invoices, and update payment methods securely.
          </p>
        </Card>
          </div>
        </div>
      </section>

      {/* Additional Features with stagger animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Additional Features</h2>
            <p className="text-xl text-gray-600">Everything you need to run your billing operations smoothly</p>
          </div>
          <div ref={featuresStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile App",
                desc: "Manage your billing on the go with our mobile applications",
                color: "text-brand-primary",
              },
              {
                icon: Globe,
                title: "Multi-Currency",
                desc: "Support for 100+ currencies and automatic exchange rates",
                color: "text-brand-secondary",
              },
              {
                icon: Shield,
                title: "Security",
                desc: "Bank-grade security with SOC 2 compliance and encryption",
                color: "text-brand-secondary",
              },
              {
                icon: Zap,
                title: "Integrations",
                desc: "Connect with 500+ apps and tools you already use",
                color: "text-brand-secondary",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center p-6 card-animate transition-all duration-600 ${
                  featuresStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 animate-bounce-in hover-scale`} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animation */}
      {/* <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={ctaFade.ref}
            className={`transition-all duration-1000 ${
              ctaFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in stagger-2">
              Join thousands of businesses already using Finanxer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-3">
              <Button size="lg" variant="secondary" asChild className="hover-lift btn-animate">
                <Link href="/demo">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 hover-lift btn-animate"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer with slide-up animation */}
   <Footer/>
    </div>
  )
}
