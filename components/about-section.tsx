export function AboutSection() {
  return (
    <section className="bg-sand px-6 py-6 text-wine-deep sm:py-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
          Sip, Socialize, and Learn Some ASL With Us!
        </h2>

        <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-wine-deep/75">
          We get it! So many people want to learn American Sign Language, but fitting an entire course into a busy schedule isn't always realistic. Our Sip & Sign events turn learning into a relaxed, interactive social experience. Ditch the classroom and drop into one (or all!) of these engaging, themed sessions that explore topics like wine tastings, craft brews, premium coffee, or seasons & holidays.
        </p>
        {/* 
        <div className="mt-12 grid gap-x-8 sm:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.number} className="border-t border-wine/25 py-6 sm:py-8">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] text-wine/70">{block.number}</p>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-wine-deep">
                {block.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-wine-deep/65">{block.place}</p>
            </article>
          ))}
        </div> */}

        <div className="mt-10 border-l-2 border-gold py-1 pl-6 sm:mt-12 sm:pl-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-wine/65">
            What you&apos;ll take away
          </p>
          <p className="mt-4 max-w-4xl font-serif text-2xl font-medium leading-snug text-wine sm:text-3xl">
            Whether you join us for a single session or attend every month, every gathering delivers tangible, real-world value. You'll master foundational vocabulary, basic fingerspelling, and essential social signs, from introducing yourself and greeting friends to ordering food and drinks. You'll walk away with usable ASL, elevated confidence, and genuine local connections.
          </p>
        </div>
      </div>
    </section>
  )
}
