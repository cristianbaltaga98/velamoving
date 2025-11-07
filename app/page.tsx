import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
