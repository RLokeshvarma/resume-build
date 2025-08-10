import React from "react";

export default function ResumeME() {
  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed space-y-8">
      
      {/* ===== Header ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-end">
        {/* Left: Name */}
        <h1 className="uppercase tracking-wider text-2xl sm:text-4xl md:text-4xl font-extrabold">
          Samira Alcaraz
        </h1>
        {/* Right: Title */}
        <div className="mt-1 md:mt-0 text-left md:text-right">
          <span className="text-sm sm:text-2xl">
            Mechanical Engineer
          </span>
        </div>
      </div>
      <br /><br />

      {/* ===== Contact ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left col: Heading */}
        <div className="md:col-span-3">
          <h2 className="uppercase text-xl font-bold tracking-wide">
            Contact
          </h2>
        </div>

        {/* Right col: Content */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-sm">
            {/* Column 1 */}
            <div className="space-y-1">
              <div>
                <span className="font-bold text-lg">Phone: </span>
                <span className="text-lg">+123-456-7890</span>
              </div>
              <div>
                <span className="font-bold text-lg">Email: </span>
                <span className="text-lg"> hello@reallygreatsite.com</span>
              </div>
            </div>
            {/* Column 2 */}
            <div className="space-y-1">
              <div>
                <span className="font-bold text-lg">Address: </span>
                <span className="text-lg">123 Anywhere St., Any City, ST 12345</span>
              </div>
              <div>
                <span className="font-bold text-lg">Portfolio: </span>
                <span className="text-lg">www.reallygreatsite.com</span>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-gray-800 pb-7"></div>
        </div>
      </div>

      {/* ===== Professional Experience ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <h2 className="uppercase text-xl font-bold tracking-wide">
            Professional Experience
          </h2>
        </div>
        <div className="md:col-span-9 space-y-6">
          {/* Job 1 */}
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="font-bold text-lg">Research and Development Engineer | 2030-2035</h3>
            </div>
            <p className="text-lg mb-4">The Innovation Lab</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-lg">Spearheaded the development of advanced materials, resulting in a 15% increase in product efficiency</li>
              <li className="text-lg">Conducted comprehensive experiments and data analysis, leading to three published journal papers</li>
              <li className="text-lg">Collaborated with cross-functional teams to ideate and prototype innovative solutions for industry-specific challenges</li>
            </ul>
          </div>
          {/* Job 2 */}
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="font-bold text-lg">Mechanical Engineer | 2027-2030</h3>
            </div>
            <p className="text-lg mb-4">Science and Tech Co.</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-lg">Assisted in optimizing mechanical systems for manufacturing processes, improving production speed by 20%</li>
              <li className="text-lg">Drafted and implemented quality control procedures, reducing defects and inconsistencies by 30%</li>
              <li className="text-lg">Supported the creation of detailed project reports and documentation for senior stakeholders</li>
            </ul>
          </div>

          <div className="border-b-2 border-gray-900"></div>
        </div>
      </div>

      {/* ===== Education ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <h2 className="uppercase text-xl font-bold tracking-wide">
            Education
          </h2>
        </div>
        <div className="md:col-span-9 space-y-6">
          {/* Degree 1 */}
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="font-bold text-lg">North State University | 2025-2027</h3>
            </div>
            <p className="text-lg mb-4">Master of Science in Mechanical Engineering</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-lg">GPA: 3.8</li>
              <li className="text-lg">Best Thesis Awardee</li>
              <li className="text-lg">Recognition for Extended Research Paper</li>
            </ul>
          </div>
          {/* Degree 2 */}
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="font-bold text-lg">South City College | 2021-2025</h3>
            </div>
            <p className="text-lg mb-4">Bachelor of Science in Mechanical Engineering</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-lg">GPA: 3.8</li>
              <li className="text-lg">Editor-in-Chief, SCC Newsletter</li>
              <li className="text-lg">President, The Innovation Society</li>
            </ul>
          </div>
          <div className="border-b-2 border-gray-900"></div>
        </div>
      </div>

      {/* ===== Certificates ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <h2 className="uppercase text-xl font-bold tracking-wide">
            Certificates
          </h2>
        </div>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <div>
            <p className="font-bold text-lg">Project Management | 2027</p>
            <p className="text-lg mt-1">The Project Management Institute</p>
          </div>
          <div>
            <p className="font-bold text-lg">System Optimization | 2028</p>
            <p className="text-lg mt-1">Scrum Learning Society</p>
          </div>
          <div>
            <p className="font-bold text-lg">Risk Management and Mitigation | 2028</p>
            <p className="text-lg mt-1">Internal Auditors Team</p>
          </div>
          <div>
            <p className="font-bold text-lg">Vendor Relations | 2030</p>
            <p className="text-lg mt-1">South City College</p>
          </div>
        </div>
      </div>

    </div>
  );
}
