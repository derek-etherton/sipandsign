import { Handshake, MapPin } from "lucide-react"

function IlyHandIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth / 1.15}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <g transform="translate(12 12) scale(1.15) translate(-10.6 -12.7)">
        <path d="M8.5 22C7.8 20.5 7 19 6.2 17.8L2.6 13.2A1.6 1.6 0 0 1 5.2 11.2L7.7 13.6 7.4 4.8A1.4 1.4 0 0 1 10.2 4.9L10.5 12A1.3 1.3 0 0 1 13.1 12 1.3 1.3 0 0 1 15.7 12L16 8.6A1.2 1.2 0 0 1 18.4 8.8L18.2 16C18 18.5 17.2 20.5 16.5 22" />
        <path d="M10.5 12v2.8a1.3 1.3 0 0 0 2.6 0V12M13.1 12v2.8a1.3 1.3 0 0 0 2.6 0V12" />
      </g>
    </svg>
  )
}

const values = [
  {
    icon: IlyHandIcon,
    eyebrow: "Deaf-Led Excellence",
    title: "100% Deaf-Led Instruction",
    description:
      "Every session is taught by a Deaf ASL instructor with lived experience, knowledge, and passion for teaching.",
  },
  {
    icon: Handshake,
    eyebrow: "Community First",
    title: "Building Real Allies",
    description:
      "Our socials spark cultural appreciation and curiosity, fostering genuine allyship and broader ASL learning.",
  },
  {
    icon: MapPin,
    eyebrow: "Supporting Local",
    title: "Local businesses",
    description:
      "We partner exclusively with local businesses and venues right here in the Bay of Quinte, creating inclusive, vibrant communal spaces.",
  },
]

export function CommitmentSection() {
  return (
    <section className="bg-wine-deep px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3 sm:gap-8">
        {values.map(({ icon: Icon, eyebrow, title, description }) => (
          <article key={eyebrow} className="flex flex-col items-center text-center">
            <p className="font-serif text-lg font-medium uppercase tracking-[0.18em] text-cream">{eyebrow}</p>
            <div
              className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 text-gold"
              aria-hidden="true"
            >
              <Icon className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-wide text-cream">{title}</h3>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream/65">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
