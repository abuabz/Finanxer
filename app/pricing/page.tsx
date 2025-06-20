"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation } from "@/components/animations"
import { useEffect, useState } from "react"
import Image from "next/image"
import NavbarNormal from "@/components/navbarNormal"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroFade = useFadeInOnScroll()
  const pricingStagger = useStaggerAnimation(3, 200)
  const faqFade = useFadeInOnScroll()

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
            <h1 className="text-5xl font-bold mb-6 text-gradient animate-fade-in">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              No setup fees, no hidden costs. Choose the plan that fits your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards with stagger animation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={pricingStagger.ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card
              className={`relative card-animate transition-all duration-600 ${pricingStagger.visibleItems.includes(0) ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg text-gray-600 mb-2 animate-fade-in">Starter</CardTitle>
                <div className="text-5xl font-bold mb-2 animate-fade-in stagger-2">
                  Free
                  <span className="text-lg font-normal text-gray-600 ml-2">Free forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full btn-animate hover-lift" variant="outline">
                  Get started
                </Button>
                <ul className="space-y-3">
                  {["Basic invoicing", "Unlimited clients", "Email support"].map((feature, index) => (
                    <li key={feature} className={`flex items-center animate-fade-in stagger-${index + 3}`}>
                      <Check className="w-5 h-5 text-green-600 mr-3 animate-bounce-in" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card
              className={`relative border-brand-primary border-2 card-animate transition-all duration-600 ${pricingStagger.visibleItems.includes(1) ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-in">
                <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg text-gray-600 mb-2 animate-fade-in">Growth</CardTitle>
                <div className="text-5xl font-bold mb-2 animate-fade-in stagger-2">
                  $49
                  <span className="text-lg font-normal text-gray-600 ml-2">Per month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full bg-brand-primary hover:bg-opacity-90 btn-animate hover-lift hover-glow">
                  Get started
                </Button>
                <ul className="space-y-3">
                  {["Everything in Starter, plus", "Advanced reporting", "Custom branding", "Priority support"].map(
                    (feature, index) => (
                      <li key={feature} className={`flex items-center animate-fade-in stagger-${index + 3}`}>
                        <Check className="w-5 h-5 text-green-600 mr-3 animate-bounce-in" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card
              className={`relative card-animate transition-all duration-600 ${pricingStagger.visibleItems.includes(2) ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg text-gray-600 mb-2 animate-fade-in">Enterprise</CardTitle>
                <div className="text-5xl font-bold mb-2 animate-fade-in stagger-2">Contact us</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full btn-animate hover-lift" variant="outline">
                  Contact sales
                </Button>
                <ul className="space-y-3">
                  {["Custom solutions", "Dedicated account manager", "24/7 support"].map((feature, index) => (
                    <li key={feature} className={`flex items-center animate-fade-in stagger-${index + 3}`}>
                      <Check className="w-5 h-5 text-green-600 mr-3 animate-bounce-in" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              ref={faqFade.ref}
              className={`text-center mb-12 transition-all duration-800 ${faqFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
            >
              <h2 className="text-4xl font-bold mb-6">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payments via PayPal and bank transfers.",
                },
                {
                  question: "Can I upgrade or downgrade my plan at any time?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
                },
                {
                  question: "Do you offer discounts for non-profit organizations?",
                  answer:
                    "Yes, we offer special pricing for qualified non-profit organizations. Please contact our sales team for more information about our non-profit program.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Our Starter plan is free forever with basic features. For our Growth plan, we offer a 14-day free trial with full access to all features.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "We provide email support for all plans, priority support for Growth plan users, and dedicated 24/7 support for Enterprise customers. We also have a comprehensive knowledge base and video tutorials.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={`item-${index + 1}`}
                  value={`item-${index + 1}`}
                  className={`bg-white rounded-lg px-6 card-animate animate-fade-in-up stagger-${index + 1}`}
                >
                  <AccordionTrigger className="text-left hover:text-brand-primary transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer with slide-up animation */}
     <Footer/>
    </div>
  )
}
