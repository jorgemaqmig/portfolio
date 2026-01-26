import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
  images?: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [featuredProject, ...restProjects] = projects;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel for featured project
  useEffect(() => {
    if (featuredProject?.images && featuredProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % featuredProject.images!.length);
      }, 5000); // 5 seconds interval
      return () => clearInterval(interval);
    }
  }, [featuredProject]);

  const nextImage = () => {
    if (featuredProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % featuredProject.images!.length);
    }
  };

  const prevImage = () => {
    if (featuredProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + featuredProject.images!.length) % featuredProject.images!.length);
    }
  };

  return (
    <div className="w-full min-h-screen py-20 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Mis Proyectos
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Algunos de los proyectos en los que he trabajado
        </p>

        {/* Featured Project */}
        {featuredProject && (
          <div className='w-full bg-card border-2 border-primary/50 rounded-3xl mb-20 relative overflow-hidden group hover:border-primary transition-all duration-500 shadow-2xl shadow-primary/10'>
            {/* Featured Badge */}
            <div className='absolute top-6 right-6 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold tracking-wider z-20 shadow-lg text-sm'>
              DESTACADO
            </div>

            <div className='flex flex-col'>
              {/* Carousel Container */}
              <div className='relative h-[250px] md:h-[400px] overflow-hidden bg-muted'>
                {featuredProject.images && featuredProject.images.length > 0 ? (
                  <>
                    <div className='absolute inset-0 flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                      {featuredProject.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${featuredProject.title} slide ${idx}`}
                          className='w-full h-full object-cover object-top shrink-0'
                        />
                      ))}
                    </div>

                    {/* Carousel Controls */}
                    {featuredProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all z-10 opacity-0 group-hover:opacity-100'
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all z-10 opacity-0 group-hover:opacity-100'
                        >
                          <ChevronRight size={24} />
                        </button>

                        {/* Dots */}
                        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                          {featuredProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-primary w-8' : 'bg-white/50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-muted'>
                    <FolderGit2 size={80} className='text-muted-foreground opacity-20' />
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60' />
              </div>

              {/* Featured Info */}
              <div className='p-6 md:p-10 relative z-10'>
                <h3 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
                  {featuredProject.title}
                </h3>
                <p className='text-lg text-muted-foreground mb-6 max-w-4xl leading-relaxed'>
                  {featuredProject.description}
                </p>

                {featuredProject.technologies && featuredProject.technologies.length > 0 && (
                  <div className='flex flex-wrap gap-3 mb-10'>
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-5 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className='flex flex-wrap gap-6'>
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20'
                    >
                      <Github size={24} />
                      Ver Código
                    </a>
                  )}
                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-secondary text-secondary rounded-xl font-bold hover:bg-secondary/10 hover:scale-105 active:scale-95 transition-all'
                    >
                      <ExternalLink size={24} />
                      Demo en Vivo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {restProjects.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
            {restProjects.map((project) => (
              <div
                key={project.id}
                className='flex flex-col bg-card border border-border/20 rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 group shadow-xl'
              >
                {/* Image Section */}
                <div className='h-52 w-full overflow-hidden bg-muted relative'>
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <FolderGit2 className='text-muted-foreground opacity-20' />
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Content Section */}
                <div className='p-6 flex flex-col flex-1'>
                  <h3 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4'>
                    {project.title}
                  </h3>

                  <p className='text-muted-foreground mb-6 line-clamp-3 leading-relaxed text-sm md:text-base'>
                    {project.description}
                  </p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-8 mt-auto'>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className='flex justify-between items-center border-t border-border/10 pt-4'>
                    <div className='flex gap-4'>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-muted-foreground hover:text-primary transition-colors hover:scale-110'
                          title="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-muted-foreground hover:text-primary transition-colors hover:scale-110'
                          title="Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <FolderGit2 size={18} className='text-muted-foreground/30' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No hay proyectos disponibles aún. ¡Próximamente!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

