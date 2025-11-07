export default function CTA() {
  return (
    <section className="py-20 px-4 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl opacity-90">
          Get your free quote today and experience professional removal services you can trust.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-accent-foreground text-accent rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </button>
          <button className="px-8 py-3 border border-accent-foreground text-accent-foreground rounded-full font-semibold hover:bg-accent-foreground hover:text-accent transition-colors">
            Call Us Now
          </button>
        </div>
        <p className="text-sm opacity-75">Available 24/7 • No obligations • Transparent pricing</p>
      </div>
    </section>
  )
}
