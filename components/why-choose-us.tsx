export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description:
        "Our experienced removals specialists have handled thousands of moves with care and professionalism.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Get instant quotes and know exactly what you'll pay before booking.",
    },
    {
      title: "Fully Insured",
      description: "Your belongings are protected with comprehensive insurance coverage on every move.",
    },
    {
      title: "Fast & Reliable",
      description: "On-time service with professional equipment and trained staff for smooth relocations.",
    },
    {
      title: "24/7 Support",
      description: "Contact us anytime with questions or concerns. We're here to help throughout your move.",
    },
    {
      title: "Eco-Friendly",
      description: "We use sustainable practices and recyclable materials to minimize environmental impact.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-foreground">Why Choose Us?</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          We've been providing exceptional removal services across the UK for over a decade.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-accent-foreground font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
