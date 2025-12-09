import React from "react";
import { FaLaptopCode, FaBook, FaMusic, FaRunning } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      degree: "Information Technology",
      school: "National University of Management",
      year: "2020 - 2024",
    },
  ];

  const experience = [
    {
      role: "Cashier and Service",
      company: "Louisiana Famous Fried Chicken, Phnom Penh",
      year: "2021 - 2022",
      details: [
        "Communicated with customers and handled the cash register.",
        "Processed payments and issued receipts accurately.",
        "Resolved customer complaints and provided solutions.",
      ],
    },
    {
      role: "Stock Controller",
      company: "Rally Auto Part, Phnom Penh",
      year: "2022 - 2023",
      details: [
        "Managed and maintained accurate inventory records.",
        "Ensured sufficient stock levels and efficient warehouse operations.",
        "Conducted stock audits and reconciled discrepancies.",
      ],
    },
    {
      role: "Assistant to Operation Manager",
      company: "De Spacework Co., Ltd., Phnom Penh",
      year: "2023 - Present",
      details: [
        "Support day-to-day operations of the business.",
        "Coordinat teams, monitored workflows, and ensured smooth task execution.",
        "Assisted in planning, reporting, and managing operational processes.",
      ],
    },
  ];

  const skills = [
    "Operating POS",
    "Problem-solving",
    "Managing receipts",
    "Data entry",
    "Team coordination",
    "Planning",
    "Reporting",
    "E-Filing for Monthly Tax Declaration",
  ];

  const interests = [
    { icon: <FaLaptopCode />, label: "Coding" },
    { icon: <FaBook />, label: "Reading" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaRunning />, label: "Fitness" },
  ];

  // Summary
  const personalStatement =
    "A highly motivated and adaptable individual with experience in business operations, stock management, and customer service. Currently completing a Bachelor's in Information Technology. Dedicated to leveraging strong organizational skills, team coordination, problem-solving, and data management abilities to transition into an Information Technology (IT) related role. Highly eager to learn new technologies and contribute actively to achieving team goals";

  return (
    <section
      id="resume"
      className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-lg"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/5 md:pr-8">
          
          {/* Education */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold text-lg text-blue-700">
                  {edu.degree}
                </p>
                <p className="text-gray-600">
                  {edu.school} | {edu.year}
                </p>
              </div>
            ))}
          </div>
          
          <hr className="my-6 md:hidden" />

          {/* Experience */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <p className="font-bold text-gray-800">
                  {exp.role} - {exp.company}
                </p>
                <p className="text-gray-500 mb-2">{exp.year}</p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="my-6 md:hidden" />

          {/* Skills */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block border-l border-gray-300 mx-8"></div>
        <div className="md:w-2/5 md:pl-8">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">{personalStatement}</p>
          </div>
          
          <hr className="my-6" />

          {/* Interests with Icons */}
          <div className="mb-4 text-left">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Interests
            </h2>
            <div className="flex flex-wrap gap-4">
              {interests.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3 bg-gray-100
                    hover:bg-gray-200 active:bg-yellow-300
                    px-4 py-2 rounded-lg transition
                  "
                >
                  <span className="text-xl text-yellow-600">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Resume;