const chrome = "text-white"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/hero-bg.png)` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-wine-deep/85 via-wine/85 to-wine"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-16">
        {/* <p className="mt-8 rounded-full border border-gold/50 px-6 py-2 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm">
          Coming soon to the Bay of Quinte
        </p> */}

        <p className="font-serif text-xl italic text-gold sm:text-2xl">
          {"SignBridge Events presents..."}
        </p>
        <h1 className="mt-14 mb-4 whitespace-nowrap font-[family-name:var(--font-script)] text-[min(6rem,21vw)] font-normal leading-[1] sm:text-[10rem]">
          <span className={`inline-block -translate-y-3 sm:-translate-y-6 ${chrome}`}>Sip</span>{" "}
          <span className={`inline-block ${chrome}`}>&amp;</span>{" "}
          <span className={`inline-block translate-y-3 sm:translate-y-6 ${chrome}`}>Sign</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance font-serif text-xl leading-9 text-white/95 sm:max-w-none sm:whitespace-nowrap sm:text-xl sm:leading-10">
          If you&apos;ve ever thought, <em>“I&apos;d love to learn ASL,”</em> your opportunity is here.
        </p>
        <p className="mt-3 max-w-xl text-pretty font-sans text-base leading-relaxed text-white/80">
          Sign up now and be the first to know when &amp; where, and increase your chances of securing{" "}
          <span className="font-semibold text-gold">1 of only 16 seats!</span>
        </p>

        <div className="mt-6 w-full max-w-xl">
          <div className="ml-embedded" data-form="RB0cnu" />
        </div>
      </div>
    </section>
  )
}
