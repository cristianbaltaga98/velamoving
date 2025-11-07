export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London",
      text: "Fantastic service! The team was professional, punctual, and treated our belongings with great care. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Reynolds",
      location: "Manchester",
      text: "Very smooth move from start to finish. The quote was accurate and the movers were friendly and efficient.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      location: "Birmingham",
      text: "Best removal company I've used. Great communication, fair pricing, and everything arrived safely. Will use again!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trusted us with their moves.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/50 p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
