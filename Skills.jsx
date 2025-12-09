import React from "react";

const skills = {
  spoken: [
    { name: "Khmer", percentage: 100 },
    { name: "English", percentage: 70 },
  ],
  basic: [
    { name: "C Pro", percentage: 70 },
    { name: "C++ / OOP Pro", percentage: 88 },
  ],
  backend: [
    { name: "PHP", percentage: 75 },
    { name: "CAKEPHP", percentage: 50 },
    { name: "JAVA", percentage: 70 },
    { name: "C#", percentage: 60 },
  ],
  frontend: [
    { name: "React", percentage: 80 },
    { name: "Jquery", percentage: 70 },
    { name: "Javascript", percentage: 95 },
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 75},
  ],
};

const SkillGroup = ({ title, items }) => (
  <div>
    <h3 className="text-2xl font-bold mb-5">{title}</h3>

    <div className="flex flex-col gap-5">
      {items.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1 text-gray-200">
            <span className="font-medium text-black">{skill.name}</span>
            <span className="text-accent-gold">{skill.percentage}%</span>
          </div>

          <div className="h-2 w-full bg-gray-700 rounded-full">
            <div
              className="h-2 bg-accent-gold rounded-full transition-all duration-1000"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-primary-dark py-16 border-t border-gray-900">
      <div className="container mx-auto p-8 max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold mb-10">
          My <span className="text-accent-gold">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mb-14 italic">
          Strong skillset in both frontend and backend technologies.
        </p>

        {/* Two-Column Grid for Groups */}
        <div className="grid md:grid-cols-2 gap-16">
          <SkillGroup title="Spoken languages" items={skills.spoken} />
          <SkillGroup title="Basic Programming" items={skills.basic} />
          <SkillGroup title="Backend development" items={skills.backend} />
          <SkillGroup title="Frontend development" items={skills.frontend} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
