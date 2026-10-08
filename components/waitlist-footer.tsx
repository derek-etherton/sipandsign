export function WaitlistFooter() {
  return (
    <>
      <section className="bg-cream px-6 py-24 text-wine-deep sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
            Strictly Limited, Exclusive Seats
          </h2>

          <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-wine-deep/70">
            To maintain clear sightlines and an authentic, intimate atmosphere, each session is capped. This is an
            exclusive opportunity to connect deeply. Join the priority waitlist to secure your chance to attend our
            events across the region!
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <div className="ml-embedded" data-form="RB0cnu" />
            <p className="mx-auto mt-4 max-w-lg font-sans text-xs leading-relaxed text-wine-deep/60">
              Be first to know, and first in line for a seat. By joining you agree to receive emails from Bay of Quinte
              Sip &amp; Sign. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-wine px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-sans text-xs tracking-wide text-cream/60">
            {"\u00A9 2026 Bay of Quinte Sip & Sign. Belleville, Ontario, Canada."}
          </p>
          <p className="font-serif text-sm italic tracking-wide text-cream/80">
            Sip &amp; Sign <span className="not-italic">ASL</span>
          </p>
        </div>
      </footer>
    </>
  )
}
