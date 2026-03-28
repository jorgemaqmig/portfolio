import React, { useState, useEffect, useCallback } from 'react';
import { Github, ExternalLink, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

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

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
  autoPlayInterval?: number;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title, className, autoPlayInterval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [images, autoPlayInterval, isPaused]);

  const nextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.length > 0 ? (
        <>
          <div
            className='absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]'
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} - captura ${idx + 1}`}
                className='w-full h-full object-cover object-top shrink-0'
              />
            ))}
          </div>

          {/* Sutil overlay inferior para contraste con los dots */}
          <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-[5]' />

          {images.length > 1 && (
            <>
              {/* Controles de navegación */}
              <button
                onClick={prevImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 backdrop-blur-xl rounded-full text-white/90 hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 shadow-lg'
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>
              <button
                onClick={nextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 backdrop-blur-xl rounded-full text-white/90 hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 shadow-lg'
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>

              {/* Indicadores de posición */}
              <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={cn(
                      'h-2 rounded-full transition-all duration-500 shadow-sm',
                      currentImageIndex === idx
                        ? 'bg-primary w-8'
                        : 'bg-white/40 w-2 hover:bg-white/70'
                    )}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className='w-full h-full flex items-center justify-center bg-muted/20'>
          <FolderGit2 size={64} className='text-muted-foreground/20' />
        </div>
      )}
    </div>
  );
};

/* ─── Número de proyecto estilizado ─── */
const ProjectNumber: React.FC<{ index: number }> = ({ index }) => (
  <span className='text-[10rem] md:text-[14rem] font-black leading-none text-primary/[0.04] absolute -top-16 select-none pointer-events-none tracking-tighter'
    style={{ fontVariantNumeric: 'tabular-nums' }}
  >
    {String(index + 1).padStart(2, '0')}
  </span>
);

const ProjectCard: React.FC<{ project: Project; isReversed?: boolean; index: number }> = ({ project, isReversed, index }) => {
  return (
    <div className={cn(
      'flex flex-col md:flex-row items-center gap-10 md:gap-16 group/card',
      isReversed && 'md:flex-row-reverse'
    )}>
      {/* ── Imagen ── */}
      <div className='w-full md:w-[58%] shrink-0 relative group'>
        <ProjectImageCarousel
          images={project.images || []}
          title={project.title}
          className='h-[320px] md:h-[480px] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/[0.06] group-hover:border-primary/20 transition-all duration-500'
        />
        {/* Glow sutil al hover */}
        <div className='absolute -inset-8 bg-primary/[0.03] blur-3xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 -z-10' />
      </div>

      {/* ── Contenido ── */}
      <div className='flex-1 py-2 relative'>
        <ProjectNumber index={index} />

        <div className='space-y-6 relative z-10'>
          {/* Título */}
          <div>
            <span className='text-xs font-semibold tracking-[0.2em] uppercase text-primary/50 mb-3 block'>
              Proyecto {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]'>
              {project.title}
            </h3>
          </div>

          {/* Descripción */}
          <p className='text-lg text-muted-foreground/80 leading-[1.8] max-w-lg'>
            {project.description}
          </p>

          {/* Tecnologías */}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-2.5 pt-2'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase bg-white/[0.04] text-primary/70 border border-white/[0.06] hover:border-primary/20 hover:text-primary transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Botones */}
          <div className='flex flex-wrap gap-4 pt-3'>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-primary/25'
              >
                <Github size={18} />
                Ver Código
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/[0.04] border border-white/10 text-foreground rounded-xl font-semibold text-sm hover:bg-white/[0.08] hover:border-primary/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 backdrop-blur-sm'
              >
                <ExternalLink size={18} />
                Demo en Vivo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="w-full min-h-screen py-24 px-4 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* ── Cabecera ── */}
        <div className='text-center mb-28'>
          <span className='text-xs font-semibold tracking-[0.3em] uppercase text-primary/50 mb-6 block'>
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
            Mis Proyectos
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto rounded-full' />
        </div>

        {/* ── Lista de proyectos ── */}
        <div className='space-y-32 md:space-y-44'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

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
