"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useFadeInOnScroll, useStaggerAnimation } from "@/components/animations"
import { useEffect, useState } from "react"
import NavbarNormal from "@/components/navbarNormal"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroFade = useFadeInOnScroll()
  const storyFade = useFadeInOnScroll()
  const valuesStagger = useStaggerAnimation(3, 200)
  const teamStagger = useStaggerAnimation(4, 150)
  const ctaFade = useFadeInOnScroll()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header with slide-in animation */}
      <NavbarNormal />

      {/* Hero Section with enhanced animations */}
      <section className="py-20 bg-brand-gradient-light">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={heroFade.ref}
            className={`transition-all duration-1000 ${heroFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-5xl font-bold mb-6 text-gradient animate-fade-in">About Finanxer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-2">
              We're on a mission to revolutionize billing for businesses of all sizes. Our platform combines powerful
              features with intuitive design to make financial management effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story with enhanced animations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={storyFade.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${storyFade.isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className={`space-y-6 ${storyFade.isVisible ? "animate-fade-in-left" : ""}`}>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in-left stagger-2">
                Founded in 2020, Finanxer emerged from a simple observation: businesses were struggling with outdated,
                complex billing systems that hindered their growth rather than enabling it.
              </p>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in-left stagger-3">
                Our founders, experienced entrepreneurs themselves, understood the pain points of managing invoices,
                tracking payments, and maintaining customer relationships while trying to scale a business.
              </p>
              <p className="text-lg text-gray-600 animate-fade-in-left stagger-4">
                Today, we serve over 5,000 businesses worldwide, from startups to enterprises, helping them streamline
                their billing processes and focus on what matters most: growing their business.
              </p>
            </div>
            <div className={`${storyFade.isVisible ? "animate-fade-in-right" : ""}`}>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg hover-lift animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values with stagger animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div ref={valuesStagger.ref} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To empower businesses with intelligent billing solutions that simplify financial operations and accelerate growth.",
                color: "text-brand-primary",
              },
              {
                icon: Award,
                title: "Our Vision",
                desc: "To become the world's most trusted billing platform, enabling businesses to thrive in the digital economy.",
                color: "text-brand-secondary",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Innovation, reliability, customer-centricity, and transparency guide everything we do.",
                color: "text-brand-primary",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center p-8 card-animate transition-all duration-600 ${valuesStagger.visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-90"
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <item.icon className={`w-16 h-16 ${item.color} mx-auto mb-6 animate-bounce-in hover-scale`} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with stagger animation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate individuals behind Finanxer's success</p>
          </div>
          <div ref={teamStagger.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Co-Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "Michael Chen", role: "CTO & Co-Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "Emily Rodriguez", role: "Head of Product", image: "/placeholder.svg?height=300&width=300" },
              { name: "David Kim", role: "Head of Engineering", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <Card
                key={index}
                className={`text-center overflow-hidden card-animate transition-all duration-600 ${teamStagger.visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animation */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={ctaFade.ref}
            className={`transition-all duration-1000 ${ctaFade.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Join Our Journey?</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in stagger-2">
              Experience the future of billing with Finanxer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-3">
              <Button size="lg" variant="secondary" asChild className="hover-lift btn-animate">
                <Link href="/demo">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-brand-primary border-white hover:bg-white hover:text-blue-600 hover-lift btn-animate"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with slide-up animation */}
     <Footer/>
    </div>
  )
}
