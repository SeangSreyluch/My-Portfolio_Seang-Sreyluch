import React from 'react';

const projectsData = [
   {
    title: "Attendance System",
    description: "A full-stack attendance management system that allows teachers to mark student attendance, generate reports, and view attendance statistics. Built with modern web technologies and responsive design.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    liveLink: "https://github.com/SeangSreyluch", 
    repoLink: "https://github.com/SeangSreyluch", 
  },
   {
    title: "Food Ordering App",
    description: "A web application that allows users to browse a menu, add items to the cart, and place orders. Includes an admin panel to manage menu items and order tracking. Designed with responsive UI for desktop and mobile devices.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    liveLink: "https://github.com/SeangSreyluch", 
    repoLink: "https://github.com/SeangSreyluch", 
  },
  {
  title: "Mobile App Projects",
  description: "A mobile app for creating, editing, and organizing notes. Features include search, category tagging, and persistent storage using local device memory.",
  tags: ["Flutter", "Dart", "Mobile Development"],
  liveLink: "https://github.com/SeangSreyluch",
  repoLink: "https://github.com/SeangSreyluch",
}

];

const Projects = () => {
  return (
    <section id="projects" className="bg-primary-dark py-16 border-t border-gray-900">
      <div className="container mx-auto p-8">
        <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-text-light">
          <span className="text-accent-gold"> My Projects</span>
        </h2>
        
        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg bg-gray-900 shadow-2xl hover:shadow-accent-gold/50 transition duration-500 transform hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-xl text-gray-500">{project.title} Preview</span>
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-10 transition duration-500" 
                       style={{ 
                           // Replace with actual image URL
                           backgroundImage: 'linear-gradient(135deg, #1f2937, #000000)' 
                       }}>
                  </div>
              </div>

              {/* Project Details */}
              <div className="p-6 text-text-light">
                <h3 className="mb-2 text-2xl font-semibold text-accent-gold">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-text-light">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-accent-gold hover:text-white transition duration-300"
                  >
                    View Demo &rarr;
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-gray-400 hover:text-accent-gold transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;