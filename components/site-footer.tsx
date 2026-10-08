export function SiteFooter() {
  return (
    <>
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
