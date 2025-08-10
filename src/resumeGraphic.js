import React from "react";

export default function ResumeGraphicDesigner() {
  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed">
      <div className="w-full space-y-6">

        {/* ===== HEADER ===== */}
        <header className="w-full">
          {/* Name + Title (left, unchanged) */}
          <h1 className="uppercase font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl">
            SEEMA CHAUDHRY
          </h1>
          <p className="text-sm sm:text-base font-m mt-1">Graphic Designer</p>

          {/* Contact bar (full-screen width, left-aligned, with icons) */}
          <div className="relative left-1/2 -translate-x-1/2 w-screen bg-[#b7cdd1] mt-4 py-3">
            {/* Match the page's left padding so it lines up with the header */}
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-12">
              <div className="
  flex flex-col items-start gap-2
  sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 sm:justify-between
  text-sm sm:text-base
">
                {/* phone */}
                <div className="flex items-center gap-2 min-w-0">
                  <img src="/call-192-svgrepo-com.svg" alt="phone" className="w-4 h-4 shrink-0" />
                  <span className="truncate">+123-456-7890</span>
                </div>

                <span className="hidden sm:inline opacity-60">•</span>

                {/* location */}
                <div className="flex items-center gap-2 min-w-0">
                  <img src="/location-svgrepo-com.svg" alt="address" className="w-4 h-4 shrink-0" />
                  <span className="truncate">123 Anywhere St., Any City</span>
                </div>

                <span className="hidden sm:inline opacity-60">•</span>

                {/* website */}
                <div className="flex items-center gap-2 min-w-0">
                  <img src="/website-ui-web-svgrepo-com.svg" alt="website" className="w-4 h-4 shrink-0" />
                  <span className="truncate">www.reallygreatsite.com</span>
                </div>

                <span className="hidden sm:inline opacity-60">•</span>

                {/* email */}
                <div className="flex items-center gap-2 min-w-0">
                  <img src="/mail-01-svgrepo-com.svg" alt="email" className="w-4 h-4 shrink-0" />
                  <span className="truncate">hello@reallygreatsite.com</span>
                </div>
              </div>

            </div>
          </div>

        </header>

        {/* ===== ABOUT ME ===== */}
        <section>
          {/* label + underline BELOW the label */}
          <div className="mb-3">
            <span className="inline-block bg-[#d9e6ed] uppercase font-bold text-xs sm:text-sm px-3 py-1">
              About Me
            </span>
            <div className="border-b-2 border-gray-800" />
          </div>

          <p className="text-sm sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>

        {/* ===== EDUCATION ===== */}
        <section>
          <div className="mb-3">
            <span className="inline-block bg-[#d9e6ed] uppercase font-bold text-xs sm:text-sm px-3 py-1">
              Education
            </span>
            <div className="border-b-2 border-gray-800" />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold">RIMBERIO UNIVERSITY</h3>
                <span className=" text-sm">2019–2023</span>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold">RIMBERIO UNIVERSITY</h3>
                <span className=" text-sm">2018–2019</span>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        {/* ===== SKILL ===== */}
        <section>
          <div className="mb-3">
            <span className="inline-block bg-[#d9e6ed] uppercase font-bold text-xs sm:text-sm px-3 py-1">
              Skill
            </span>
            <div className="border-b-2 border-gray-800" />
          </div>

          <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8 text-sm">
            <li>Lorem Design Software</li>
            <li>Visual Imagination</li>
            <li>Typography</li>
            <li>Digital Illustration</li>
            <li>Communication</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        {/* ===== WORK EXPERIENCE ===== */}
        <section>
          <div className="mb-3">
            <span className="inline-block bg-[#d9e6ed] uppercase font-bold text-xs sm:text-sm px-3 py-1">
              Work Experience
            </span>
            <div className="border-b-2 border-gray-800" />
          </div>

          {/* Item 1 */}
          <article className="space-y-2 mb-6">
            <div className="flex justify-between items-baseline gap-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-bold">Aldenaire&Partners</h3>
                <span className="text-sm font-bold">-</span>
                <span className="italic text-sm font-bold">Graphic Designer</span>
              </div>
              <span className="font-bold text-sm">2024–NOW</span>
            </div>

            <p className="text-sm sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-sm">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </article>

          {/* Item 2 */}
          <article className="space-y-2 mb-6">
            <div className="flex justify-between items-baseline gap-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-bold">Thynk Unlimited</h3>
                <span className="text-sm font-bold">-</span>
                <span className="italic text-sm font-bold">Graphic Designer</span>
              </div>
              <span className="font-bold text-sm">2019–2023</span>
            </div>

            <p className="text-sm sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-sm">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </article>

          {/* Item 3 */}
          <article className="space-y-2">
            <div className="flex justify-between items-baseline gap-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-bold">Wardiere Inc</h3>
                <span className="text-sm font-bold">-</span>
                <span className="italic text-sm font-bold">Graphic Designer</span>
              </div>
              <span className="font-bold text-sm">2018–2019</span>
            </div>

            <p className="text-s sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-sm">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </article>
        </section>

      </div>
    </div>
  );
}
