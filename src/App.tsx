import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png';

import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { BeamsBackground } from './components/BeamsBackground';

// Datos de ejemplo de proyectos - puedes modificarlos con tus propios proyectos
const exampleProjects = [
  {
    id: 1,
    title: "LearningCode",
    description: "Plataforma integral de aprendizaje de programación que combina cursos teóricos con retos prácticos. Diseñada para guiar a los usuarios desde los conceptos básicos hasta niveles avanzados con una experiencia interactiva y gamificada.",
    technologies: ["Angular", "Node.js", "TypeScript", "Express", "Vercel"],
    link: "https://frontend-learningcode.vercel.app/",
    github: "https://github.com/jorgemaqmig/learningcode",
    images: [
      "/projects/inicio.png",
      "/projects/cursos.png",
      "/projects/cursos2.png",
      "/projects/cursos3.png",
      "/projects/retos.png",
      "/projects/retos2.png",
    ]
  },
  {
    id: 2,
    title: "NeuroConnect API",
    description: "API robusta para la gestión de datos neuronales en entornos de investigación. Implementa protocolos de seguridad avanzados y procesamiento de señales en tiempo real.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    link: "https://example.com",
    github: "https://github.com/example",
    images: [
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 3,
    title: "VistaMobile App",
    description: "Aplicación móvil de realidad aumentada para diseño de interiores. Permite a los usuarios visualizar muebles y decoraciones en sus espacios reales antes de comprar.",
    technologies: ["React Native", "Three.js", "Firebase", "Redux"],
    link: "https://example.com",
    github: "https://github.com/example",
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
    ]
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false); // Close menu if open
    const sectionId = href.replace('#', '');

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Scroll suave a la sección
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset para la navegación fija
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <BeamsBackground className="bg-background">
        <div className='w-full min-h-screen relative overflow-x-hidden selection:bg-secondary/30'>
          {/* Grain Overlay */}
          <div className='grain-overlay' />

          {/* Navegación */}
          <div className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20 overflow-hidden'>
            <div className='flex items-center justify-between px-6 py-4 relative'>
              <img src={logo} alt="Mi logo" className='w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity duration-300' onClick={() => handleNavClick('top')} />

              {/* Botón Hamburguesa (visible cuando el menú está cerrado) */}
              <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 text-primary hover:text-primary/80 transition-colors"
                  aria-label="Abrir menú"
                >
                  <Menu size={32} />
                </button>
              </div>

              {/* Menú Horizontal Desplegable */}
              <div className={`absolute top-0 right-0 h-full bg-background/95 backdrop-blur-md flex items-center pr-6 pl-10 gap-8 transition-transform duration-300 ease-in-out border-l border-border/20 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center gap-6">
                  <a
                    href="#top"
                    onClick={(e) => { e.preventDefault(); handleNavClick('top'); }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Inicio
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Sobre Mí
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Contactar
                  </a>
                </div>

                <div className="w-px h-8 bg-border/20 mx-2"></div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-primary hover:text-primary/80 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X size={32} />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className='w-full h-screen flex items-center justify-center relative overflow-hidden'>
            <div className='text-center relative z-10'>
              <h1
                className='text-6xl md:text-8xl font-bold text-primary mb-4 cursor-pointer hover:text-secondary transition-colors duration-300'
                onClick={() => handleNavClick("#about")}
              >
                Jorge Maqueda
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
                Desarrollador Full Stack
              </p>
              <div className='flex justify-center gap-4 mt-8'>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#projects");
                  }}
                  className='px-6 py-3 bg-transparent border-2 border-secondary hover:bg-secondary/20 text-foreground rounded-lg transition-all duration-300 transform hover:scale-105'
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className='px-6 py-3 bg-transparent border-2 border-secondary hover:bg-secondary/20 text-foreground rounded-lg transition-all duration-300 transform hover:scale-105'
                >
                  Contactar
                </a>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8 opacity-50 relative z-10" />

          {/* Sección Projects */}
          <section id="projects" className='relative scroll-mt-24 py-10 overflow-hidden'>
            <Projects projects={exampleProjects} />
          </section>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8 opacity-50 relative z-10" />

          {/* Sección About */}
          <section id="about" className='relative scroll-mt-24 py-20 overflow-hidden'>
            <About
              name="Jorge Maqueda"
              title="Desarrollador Full Stack"
              description="Apasionado por el desarrollo de software y la creación de soluciones innovadoras."
            />
          </section>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8 opacity-50 relative z-10" />

          {/* Sección Contact */}
          <section id="contact" className='relative scroll-mt-24 py-20 overflow-hidden'>
            <Contact
              email="jorgemaqmig@gmail.com"
              linkedin="https://www.linkedin.com/in/jorge-maqueda-a14314399/"
              github="https://github.com/jorgemaqmig"
            />
          </section>
        </div>
      </BeamsBackground>
    </>
  );
}

export default App
