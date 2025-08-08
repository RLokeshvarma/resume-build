import React from "react";

export default function ResumePage() {
  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed">
      <div className="w-full space-y-5">

        {/* ===== Full-width Header ===== */}
        <header className="w-full">
          {/* Top pale blue bar (edge-to-edge) */}
          <div className="-mx-4 sm:-mx-6 md:-mx-12 w-auto bg-[#e5eef1] py-6 text-center">
            <h1 className="uppercase font-bold tracking-widest text-2xl sm:text-3xl md:text-4xl">
              DEEPAL SURVE
            </h1>
            <p className="mt-1 tracking-wide text-sm sm:text-lg">
              Marketing Manager
            </p>
          </div>

          {/* Contact ribbon (edge-to-edge, wraps on mobile) */}
          <div className="-mx-4 sm:-mx-6 md:-mx-12 w-auto bg-[#b7cdd1] py-3 px-4">
            <div className="w-full bg-[#b7cdd1] px-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm sm:text-lg">
              <span>+123-456-7890</span>
              <span className="hidden sm:inline">|</span>
              <span>123 Anywhere St., Any City</span>
              <span className="hidden sm:inline">|</span>
              <span>hello@reallygreatsite.com</span>
            </div>
          </div>

          {/* Divider line (edge-to-edge) */}
          <div className="border-b border-black"></div>
        </header>

        {/* About Me */}
        <section>
          <h2 className="uppercase font-semibold text-base sm:text-xl mb-2">
            About Me
          </h2>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>

        {/* ===== Education + Skill (stack on mobile with horizontal divider) ===== */}
        <section className="w-full">
          {/* top rule */}
          <div className="border-t border-gray-300 mb-4" />

          <div className="md:grid md:grid-cols-2 md:gap-8 md:divide-x md:divide-gray-300">
            {/* LEFT: EDUCATION */}
            <div className="pb-6 md:pb-0 md:pr-8">
              <h2 className="uppercase font-semibold text-base sm:text-xl mb-3 tracking-wide">
                Education
              </h2>

              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">RIMBERIO UNIVERSITY</h3>
                    <span className="font-semibold text-sm">2024 - 2027</span>
                  </div>
                  <p className="text-sm">Lorem ipsum dolor</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">RIMBERIO UNIVERSITY</h3>
                    <span className="font-semibold text-sm">2021 - 2024</span>
                  </div>
                  <p className="text-sm">Lorem ipsum dolor</p>
                </li>
              </ul>
            </div>

            {/* Divider visible only on mobile */}
            <div className="border-t border-gray-300 my-4 md:hidden"></div>

            {/* RIGHT: SKILL */}
            <div className="md:pl-8">
              <h2 className="uppercase font-semibold text-base sm:text-xl mb-3 tracking-wide">
                Skill
              </h2>

              <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm font-semibold">
                <li>Budget Management</li>
                <li>Team Coordination</li>
                <li>Schedule Planning</li>
                <li>Vendor Relations</li>
                <li>Administrative</li>
                <li>Conflict Resolution</li>
              </ul>
            </div>
          </div>

          {/* bottom rule */}
          <div className="border-b border-black mt-4" />
        </section>

        {/* ===== WORK EXPERIENCE (bullet before company; paragraph aligns under text) ===== */}
        <section>
          <h2 className="uppercase font-semibold text-base sm:text-xl mb-10 tracking-wide">
            Work Experience
          </h2>

          {/* item */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            {/* LEFT: dates */}
            <div className="md:col-span-3">
              <span className="font-extrabold">2024–NOW</span>
            </div>

            {/* RIGHT */}
            <div className="relative md:col-span-9 space-y-2 pl-5">
              <span className="absolute left-0 top-1 text-2xl font-extrabold leading-none">•</span>

              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-extrabold uppercase">Aldenaire &amp; Partners</h3>
                <span className="italic text-sm">Office Manager</span>
              </div>

              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              </ul>
            </div>
          </div>

          {/* item */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-3">
              <span className="font-extrabold">2019–2023</span>
            </div>

            <div className="relative md:col-span-9 space-y-2 pl-5">
              <span className="absolute left-0 top-1 text-2xl font-extrabold leading-none">•</span>

              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-extrabold uppercase">Thynk Unlimited</h3>
                <span className="italic text-sm">Office Manager</span>
              </div>

              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              </ul>
            </div>
          </div>

          {/* item */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="font-extrabold">2018–2019</span>
            </div>

            <div className="relative md:col-span-9 space-y-2 pl-5">
              <span className="absolute left-0 top-1 text-2xl font-extrabold leading-none">•</span>

              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-extrabold uppercase">Wardiere Inc.</h3>
                <span className="italic text-sm">Office Manager</span>
              </div>

              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
