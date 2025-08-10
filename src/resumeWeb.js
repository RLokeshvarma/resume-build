import React from "react";

export default function ResumeWeb() {
  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed">
      <div className="w-full space-y-8">

        {/* ===== Header (center image on mobile, same size; desktop unchanged) ===== */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center text-center md:text-left">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <img
              src="/profile-avatar.png"
              alt="Sharya Singh"
              className="shrink-0 w-28 h-32 md:w-24 md:h-28 lg:w-28 lg:h-32 object-cover object-center rounded-md border border-gray-200"
            />
          </div>


          {/* Name + Title + Contact */}
          <div className="md:col-span-10">
            <h1 className="uppercase font-extrabold tracking-wider text-3xl sm:text-3xl">
              SHARYA SINGH
            </h1>
            <p className="text-base sm:text-lg mb-3 mt-1">Web Designer</p>

            {/* thin divider under title */}
            <div className="border-b border-gray-800" />

            {/* Contact — stacked on mobile, inline on desktop */}
            <div className="mt-3 flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-0 md:px-3 py-1">
                <img src="/call-192-svgrepo-com.svg" alt="" className="w-4 h-4" />
                <span>+123-456-7890</span>
              </div>
              <div className="inline-flex items-center gap-2 px-0 md:px-3 py-1">
                <img src="/mail-01-svgrepo-com.svg" alt="" className="w-4 h-4" />
                <span>hello@reallygreatsite.com</span>
              </div>
              <div className="inline-flex items-center gap-2 px-0 md:px-3 py-1">
                <img src="/website-ui-web-svgrepo-com.svg" alt="" className="w-4 h-4" />
                <span>www.reallygreatsite.com</span>
              </div>
            </div>

            {/* divider under the whole header block */}
            <div className="border-b mt-3 border-gray-800" />
          </div>
        </header>

        {/* =============== SINGLE COLUMN CONTENT =============== */}
        <main className="w-full space-y-10">

          {/* ABOUT ME */}
          <section>
            <h2 className="uppercase font-bold tracking-wide text-xl">About Me</h2>
            <div className="mt-2 border-b border-black" />
            <p className="mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </section>

          {/* EDUCATION (20% / 80%) */}
          <section>
            <h2 className="uppercase font-bold tracking-wide text-xl">Education</h2>
            <div className="mt-2 border-b border-black" />

            {/* item */}
            <div className="mt-4 grid grid-cols-5 gap-4 items-start">
              <div className="col-span-5 sm:col-span-1">
                <div className="text-m">2020 – 2023</div>
                <div className=" text-m">Wardiere University</div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-bold text-sm">Master of IT Management</h3>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus
                  egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-4 items-start">
              <div className="col-span-5 sm:col-span-1">
                <div className="text-m">2016 – 2020</div>
                <div className="text-m">Borcelle University</div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-bold text-sm">Bachelor of Art and Design</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus
                  egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-4 items-start">
              <div className="col-span-5 sm:col-span-1">
                <div className="text-m">2012 – 2016</div>
                <div className="text-m">Wardiere High School</div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-bold text-sm">Major of Art and Design</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus
                  egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                </p>
              </div>
            </div>
          </section>

          {/* EXPERIENCE (20% / 80%) */}
          <section>
            <h2 className="uppercase font-bold tracking-wide text-xl">Experience</h2>
            <div className="mt-2 border-b border-black" />

            <div className="mt-4 grid grid-cols-5 gap-4 items-start">
              <div className="col-span-5 sm:col-span-1">
                <div className="text-m">2020 – 2023</div>
                <div className="text-m">Wardiere Company</div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-bold text-sm">Web Designer</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus
                  egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-4 items-start">
              <div className="col-span-5 sm:col-span-1">
                <div className="text-m">2016 – 2020</div>
                <div className="text-m">Borcelle Studio</div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-bold text-sm">Web Designer</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus
                  egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS (4 columns, 2 items each) */}
          <section>
            <h2 className="uppercase font-bold tracking-wide text-xl">Skills</h2>
            <div className="mt-2 border-b border-black" />

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8">
              <ul className="list-disc pl-5 space-y-1">
                <li>Web Design Tools</li>
                <li>Front-End</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Web Accessibility</li>
                <li>Version Control</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Color Theory</li>
                <li>SEO Fundamentals</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>UI/UX Design</li>
                <li>Typography</li>
              </ul>
            </div>
          </section>

          {/* REFERENCES (4 columns) */}
          <section>
            <h2 className="uppercase font-bold tracking-wide text-xl">References</h2>
            <div className="mt-2 border-b border-black" />

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="font-bold text-lg">Niranjan Devi</p>
                <p className="text-">CEO of Wardiere Company</p>
              </div>
              <div>
                <p className="mt-1"><span className="font-bold">Phone:</span> 123-456-7890</p>
                <p><span className="font-bold">Social:</span> @reallygreatsite</p>
              </div>
              <div>
                <p className="font-bold text-lg">Aarya Agarwal</p>
                <p className=""> HRD of Wardiere Company</p>
              </div>
              <div>
                <p className="mt-1"><span className="font-bold">Phone:</span> 123-456-7890</p>
                <p><span className="font-bold">Social:</span> @reallygreatsite</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
