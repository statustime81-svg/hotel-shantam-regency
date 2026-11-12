
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const exploreLinks = [
  ["Home", "#home"],
  ["Rooms & Suites", "#rooms"],
  ["Weddings & Events", "#events"],
  ["Facilities", "#facilities"],
  ["Restaurant", "#restaurant"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const NEXOVA_LOGO = "/image/nexova-logo.png";
const NEXOVA_URL = "https://www.nexovax.in/";

function NexovaCredit() {
  return (
    <a
      href={NEXOVA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit NEXOVA X official website"
      title="Designed and Developed by NEXOVA X"
      className="
        group inline-flex min-w-0
        items-center gap-2.5
        rounded-xl
        border border-[#D8C5A4]
        bg-[#FFFAF3]/80
        px-2.5 py-2
        no-underline
        shadow-[0_4px_16px_rgba(80,61,28,0.06)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#C6A15B]
        hover:bg-white
        hover:shadow-[0_12px_28px_rgba(153,123,67,0.18)]
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#B9954E]
        motion-reduce:transform-none
      "
    >
      {/* NEXOVA Logo */}
      <span
        className="
          relative flex h-10 w-10
          shrink-0 items-center justify-center
          overflow-hidden rounded-lg
          border border-[#E8D8BE]
          bg-white p-1
          transition-all duration-500
          group-hover:rotate-[4deg]
          group-hover:scale-105
          group-hover:border-[#B9954E]
          motion-reduce:transform-none
          sm:h-11 sm:w-11
        "
      >
        <img
          src={NEXOVA_LOGO}
          alt="NEXOVA X Logo"
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-contain
            transition-transform duration-500
            group-hover:scale-110
            motion-reduce:transform-none
          "
        />
      </span>

      {/* Credit Text */}
      <span className="flex min-w-0 flex-col">
        <span
          className="
            text-[8px] font-semibold
            uppercase tracking-[0.12em]
            text-[#8C806D]
            sm:text-[9px]
          "
        >
          Developed by
        </span>

        <span
          className="
            mt-0.5 inline-flex items-center
            gap-1 text-[11px] font-extrabold
            tracking-[0.04em] text-[#29342D]
            transition-colors duration-300
            group-hover:text-[#A9853E]
            sm:text-[12px]
          "
        >
          NEXOVA X

          <ArrowUpRight
            size={13}
            className="
              shrink-0 text-[#B9954E]
              transition-transform duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </span>

        <span className="mt-0.5 text-[9px] text-[#8C806D]">
          Built Beyond Limits
        </span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      id="policies"
      className="relative overflow-hidden border-t border-[#DCC9A7] bg-[#F1E7D8] px-5 pb-6 pt-12 text-[#29342D] sm:px-8 sm:pt-16 lg:px-12"
    >
      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="mx-auto max-w-[1240px]">
        {/* Main Footer */}
        <div className="grid gap-10 border-b border-[#DCCDB5] pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-14 lg:pb-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Hotel Shantam Regency home"
              className="group inline-flex flex-col leading-none"
            >
              <span className="font-display text-2xl tracking-wide text-[#29342D] transition-colors duration-300 group-hover:text-[#A9853E] sm:text-3xl">
                SHANTAM
              </span>

              <span className="mt-2 text-center text-[9px] tracking-[0.48em] text-[#997B43]">
                REGENCY
              </span>

              <span className="mx-auto mt-3 h-px w-10 bg-[#C6A15B] transition-all duration-300 group-hover:w-16" />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#686A61]">
              A place to stay, dine and celebrate in Bhagalpur.
              Discover thoughtful hospitality at Hotel Shantam Regency.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#77766D]">
              <MapPin
                size={15}
                className="shrink-0 text-[#B9954E]"
              />
              <span>Adampur, Bhagalpur, Bihar</span>
            </div>

            {/* GET IN TOUCH + NEXOVA CREDIT */}
            <div
              className="
                mt-6 flex flex-wrap
                items-center gap-x-5 gap-y-4
              "
            >
              <a
                href="#contact"
                className="
                  group inline-flex shrink-0
                  items-center gap-2
                  border-b border-[#C6A15B]
                  pb-2 text-sm text-[#72582D]
                  transition-colors duration-300
                  hover:text-[#29342D]
                "
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              <NexovaCredit />
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Sparkles
                size={15}
                className="text-[#B9954E]"
              />
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#997B43]">
                Explore
              </h3>
            </div>

            <nav className="grid grid-cols-2 gap-x-5 gap-y-4">
              {exploreLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="
                    group flex w-fit items-center
                    gap-1.5 text-sm text-[#55594F]
                    transition-colors duration-300
                    hover:text-[#A9853E]
                  "
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Guest Information */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C6A15B]" />
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#997B43]">
                Guest Information
              </h3>
            </div>

            <p className="text-sm leading-7 text-[#686A61]">
              For current room rates, availability, event arrangements
              and property policies, please contact the hotel directly.
            </p>

            <a
              href="#contact"
              className="
                mt-5 inline-flex min-h-11
                items-center gap-2
                border border-[#D8C5A4]
                bg-[#FFFAF3]/70
                px-4 py-2.5 text-sm
                text-[#72582D]
                transition-all duration-300
                hover:border-[#C6A15B]
                hover:bg-[#C6A15B]
                hover:text-white
              "
            >
              <Phone size={15} />
              Contact the Hotel
            </a>

            <p className="mt-4 text-xs leading-6 text-[#858073]">
              Room and event enquiries are subject to confirmation
              by the hotel.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs leading-6 text-[#77766D] sm:flex-row sm:items-center sm:pt-6">
          <p>
            © {new Date().getFullYear()} Hotel Shantam Regency.
            All rights reserved.
          </p>

          <a
            href="#policies"
            className="w-fit transition-colors duration-300 hover:text-[#A9853E]"
          >
            Guest Policies
          </a>
        </div>
      </div>
    </footer>
  );
}
