import React from "react";

export default function ResumePage() {
    return (
        <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed">
            <div className="w-full space-y-5">

                {/* Header */}
                <header className="text-center mb-6">
                    <h1 className="text-[6vw] sm:text-3xl md:text-4xl font-bold text-purple-800 tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-4">Jacqueline Thompson</h1>
                    <p className="text-sm sm:text-sm">123 Anywhere St., Any City • 123-456-7890 • hello@reallygreatsite.com</p>
                    <p className="text-xs sm:text-sm">www.reallygreatsite.com</p>
                </header>

                <div className="border-b border-purple-800"></div>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Summary</h2>
                    <p>
                        Results-oriented Engineering Executive with a proven track record of optimizing project outcomes.
                        Skilled in strategic project management and team leadership. Seeking a challenging executive role
                        to leverage technical expertise and drive engineering excellence.
                    </p>
                </section>

                <div className="border-b border-purple-800"></div>

                {/* Work Experience */}
                <section className="mb-6">
                    <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Work Experience</h2>

                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-bold">Engineering Executive, Borcelle Technologies</h3>
                            <span className="font-bold">Jan 2023 - Present</span>
                        </div>
                        <ul className="list-disc pl-6 md:pl-8 space-y-1">
                            <li> Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.</li>
                            <li> Streamlined project workflows, enhancing overall efficiency by 25%.</li>
                            <li> Led a team in successfully delivering a complex engineering project on time and within
                                allocated budget.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-bold">Project Engineer, Salford & Co</h3>
                            <span className="font-bold">Mar 2021 - Dec 2022</span>
                        </div>
                        <ul className="list-disc pl-6 md:pl-8 space-y-1">
                            <li> Managed project tispace-y-1melines, reducing delivery times by 30%.</li>
                            <li>Spearheaded the adoption of cutting-edge engineering software, improving project
                                accuracy by 15%.</li>
                            <li>Collaborated with cross-functional teams, enhancing project success rates by 10%.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-bold">Graduate Engineer, Arowwai Industries</h3>
                            <span className="font-bold">Feb 2020 - Jan 2021</span>
                        </div>
                        <ul className="list-disc pl-6 md:pl-8 space-y-1">
                            <li> Coordinated project tasks, ensuring adherence to engineering standards and regulations.</li>
                            <li> Conducted comprehensive project analyses, identifying and rectifying discrepancies in
                                engineering designs.</li>
                        </ul>
                    </div>
                </section>

                <div className="border-b border-purple-800"></div>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Education</h2>

                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-bold">Master of Science in Mechanical Engineering</h3>
                            <span className="font-bold">Sep 2019 - Oct 2020</span>
                        </div>
                        <p className="text-sm">University of Engineering and Technology</p>
                        <ul className="list-disc pl-6 md:pl-8 space-y-1">
                            <li>Specialization in Advanced Manufacturing.</li>
                            <li>Thesis on “Innovations in Sustainable Engineering Practices”.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-bold">Bachelor of Science in Civil Engineering</h3>
                            <span className="font-bold">Aug 2015 - Aug 2019</span>
                        </div>
                        <p className="text-sm">City College of Engineering</p>
                        <ul className="list-disc pl-6 md:pl-8 space-y-1">
                            <li> Relevant coursework in Structural Design and Project Management.</li>
                        </ul>
                    </div>
                </section>

                <div className="border-b border-purple-800"></div>

                {/* Additional Information */}
                <section className="mb-6">
                    <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Additional Information</h2>
                    <ul className="list-disc pl-6 md:pl-8 space-y-1">
                        <li><strong>Technical Skills:</strong> Project Management, Structural Analysis, Robotics and Automation, CAD</li>
                        <li><strong>Languages:</strong> English, Malay, German</li>
                        <li><strong>Certifications:</strong>  Professional Engineer (PE) License, Project Management Professional (PMP)</li>
                        <li><strong>Awards/Activities:</strong>  Received the "Engineering Excellence" Award for outstanding
                            contributions to project innovation, Borcelle Technologies</li>
                    </ul>
                </section>


            </div>
        </div>
    );
}
