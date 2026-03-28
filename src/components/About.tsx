import React from 'react';
import { GraduationCap, Code, Calendar, CheckCircle2, Briefcase } from 'lucide-react';

interface AboutProps {
  name?: string;
  title?: string;
  description?: string;
}

const About: React.FC<AboutProps> = ({
  name = "Jorge Maqueda",
  title = "Desarrollador Full Stack",
  description = "Apasionado por el desarrollo de software y la creación de soluciones innovadoras."
}) => {
  // Función para obtener la URL del logo de cada tecnología
  const getTechLogo = (techName: string): string => {
    const techMap: { [key: string]: string } = {
      // Lenguajes
      'JavaScript': 'javascript',
      'TypeScript': 'typescript',
      'Java': 'java',
      'Python': 'python',
      'PHP': 'php',
      'C#': 'csharp',
      'Kotlin': 'kotlin',
      'Swift': 'swift',
      // Frontend
      'React': 'react',
      'Vue.js': 'vuejs',
      'Angular': 'angular',
      'HTML5': 'html5',
      'CSS3': 'css3',
      'Tailwind CSS': 'tailwindcss',
      'SASS': 'sass',
      'Bootstrap': 'bootstrap',
      // Backend
      'Node.js': 'nodedotjs',
      'Express': 'express',
      'Spring Boot': 'spring',
      'Laravel': 'laravel',
      'ASP.NET': 'dotnet',
      'RESTful APIs': 'restapi',
      'GraphQL': 'graphql',
      // Bases de datos
      'MySQL': 'mysql',
      'PostgreSQL': 'postgresql',
      'MongoDB': 'mongodb',
      'SQLite': 'sqlite',
      'Firebase': 'firebase',
      // Herramientas
      'Git': 'git',
      'GitHub': 'github',
      'Docker': 'docker',
      'AWS': 'amazonaws',
      'Linux': 'linux',
      'Agile/Scrum': 'scrum',
      'Jest': 'jest',
      'Cypress': 'cypress',
      // Móvil
      'React Native': 'react',
      'Flutter': 'flutter',
      'Android Studio': 'androidstudio',
      'Xcode': 'xcode',
      'Ionic': 'ionic'
    };

    const techKey = techMap[techName] || techName.toLowerCase().replace(/\s+/g, '');
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techKey}/${techKey}-original.svg`;
  };
  const education = [
    {
      id: 1,
      title: "Bachillerato",
      period: "2021 - 2023",
      description: "Estudios de bachillerato completados con enfoque en ciencias y tecnología."
    },
    {
      id: 2,
      title: "Doble Grado Superior",
      period: "2023 - 2026",
      description: "Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM)",
      highlight: true
    }
  ];

  const experience = [
    {
      id: 1,
      company: "VASS",
      logo: "/projects/vass.png",
      role: "Desarrollador Salesforce",
      period: "Marzo 2026 - Actualidad",
      description: "Desarrollo y mantenimiento de aplicaciones en Salesforce.",
      highlight: true
    },
    {
      id: 2,
      company: "Domain Logic",
      logo: "/projects/domainlogic.jpeg",
      role: "Desarrollador Full Stack",
      period: "Marzo 2025 - Junio 2026",
      description: "Desarrollo de aplicaciones web utilizando Angular y Spring Boot.",
      highlight: true
    }
  ];

  const technologies = [
    {
      category: "Lenguajes de Programación",
      items: [
        "JavaScript", "TypeScript", "Java", "Python", "PHP", "C#", "Kotlin", "Swift"
      ]
    },
    {
      category: "Frontend",
      items: [
        "React", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Bootstrap"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js", "Express", "Spring Boot", "Laravel", "ASP.NET", "RESTful APIs", "GraphQL"
      ]
    },
    {
      category: "Bases de Datos",
      items: [
        "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"
      ]
    },
    {
      category: "Herramientas y Otros",
      items: [
        "Git", "GitHub", "Docker", "AWS", "Linux", "Agile/Scrum", "Jest", "Cypress"
      ]
    },
    {
      category: "Desarrollo Móvil",
      items: [
        "React Native", "Flutter", "Android Studio", "Xcode", "Ionic"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-24 px-4 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-28">
          <span className='text-xs font-semibold tracking-[0.3em] uppercase text-primary/50 mb-6 block'>
            Conóceme
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
            Sobre Mí
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto rounded-full' />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Información Personal */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06] hover:border-primary/20 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/20 transition-colors duration-500">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{name}</h3>
                  <p className="text-primary/80 font-medium">{title}</p>
                </div>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed text-base md:text-lg">
                Desarrollador Full Stack con formación en desarrollo web y multiplataforma.
                Especializado en crear aplicaciones modernas, escalables y de alto rendimiento
                utilizando las últimas tecnologías y mejores prácticas del sector.
              </p>
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2', label: 'Grados Superiores' },
              { value: '30+', label: 'Tecnologías' },
              { value: 'Full', label: 'Stack' },
              { value: 'Web', label: 'Multiplataforma' },
            ].map((stat, i) => (
              <div key={i} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-primary/20 transition-all duration-500 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground/70 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia Profesional */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-primary mb-16 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Experiencia Profesional
          </h3>

          <div className="relative">
            {/* Línea vertical con gradiente */}
            <div className="absolute left-[32px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {experience.map((item, index) => (
                <div key={item.id} className="relative pl-24 group/exp">
                  {/* Punto en la línea del tiempo */}
                  <div className="absolute left-[32px] top-10 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${item.highlight
                      ? 'bg-secondary shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                      : 'bg-muted-foreground/30'
                      }`} />
                  </div>

                  {/* Conector horizontal */}
                  <div className="absolute left-[40px] top-[44px] w-12 h-px bg-secondary/30" />

                  {/* Card de experiencia */}
                  <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06] hover:border-secondary/30 transition-all duration-500 overflow-hidden group-hover/exp:shadow-lg group-hover/exp:shadow-secondary/5">

                    {/* Glow decorativo */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-secondary/[0.04] blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      {/* Header: Logo + Info + Fecha */}
                      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">

                        {/* Logo de la empresa */}
                        <div className="w-20 h-20 rounded-2xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden group-hover/exp:border-secondary/20 transition-colors duration-500">
                          {item.logo ? (
                            <img src={item.logo} alt={item.company} className="w-full h-full object-cover rounded-2xl" />
                          ) : (
                            <Briefcase className="w-9 h-9 text-muted-foreground/40" />
                          )}
                        </div>

                        {/* Puesto y empresa */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1 leading-tight">
                            {item.role}
                          </h4>
                          <p className="text-lg text-secondary font-medium mb-3">
                            {item.company}
                          </p>
                          <div className="w-16 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent rounded-full" />
                        </div>

                        {/* Badge de fecha */}
                        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm self-start shrink-0">
                          <Calendar className="w-4 h-4 text-secondary/70" />
                          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {item.period}
                          </span>
                          {index === 0 && (
                            <span className="relative flex h-2.5 w-2.5 ml-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-muted-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formación Académica */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-16 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Formación Académica
          </h3>

          <div className="relative">
            {/* Línea vertical con gradiente */}
            <div className="absolute left-[32px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {education.map((item) => (
                <div key={item.id} className="relative pl-24 group/edu">
                  {/* Punto en la línea del tiempo */}
                  <div className="absolute left-[32px] top-10 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${item.highlight
                      ? 'bg-primary shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                      : 'bg-muted-foreground/30'
                      }`} />
                  </div>

                  {/* Conector horizontal */}
                  <div className="absolute left-[40px] top-[44px] w-12 h-px bg-primary/30" />

                  {/* Card de formación */}
                  <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06] hover:border-primary/30 transition-all duration-500 overflow-hidden group-hover/edu:shadow-lg group-hover/edu:shadow-primary/5">

                    {/* Glow decorativo */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      {/* Header: Icono + Info + Fecha */}
                      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">

                        {/* Icono de formación */}
                        <div className="w-20 h-20 rounded-2xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0 group-hover/edu:border-primary/20 transition-colors duration-500">
                          <GraduationCap className={`w-9 h-9 ${item.highlight ? 'text-primary' : 'text-muted-foreground/40'}`} />
                        </div>

                        {/* Título y descripción */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-lg text-primary/80 font-medium mb-3">
                            {item.description}
                          </p>
                          <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                        </div>

                        {/* Badge de fecha */}
                        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm self-start shrink-0">
                          <Calendar className="w-4 h-4 text-primary/70" />
                          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {/* Badge de doble titulación */}
                      {item.highlight && (
                        <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-primary/[0.06] border border-primary/10 w-fit">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm font-semibold text-primary">
                            Doble titulación en Desarrollo de Aplicaciones Web y Multiplataforma
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías y Habilidades */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-16 flex items-center gap-3">
            <Code className="w-8 h-8 text-primary" />
            Tecnologías y Habilidades
          </h3>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="relative">
                {/* Título de categoría */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                  <h4 className="text-lg md:text-xl font-semibold text-muted-foreground/70 px-4 tracking-wide">
                    {tech.category}
                  </h4>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
                </div>

                {/* Grid de tecnologías */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group relative bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-white/[0.06] hover:border-primary/20 transition-all duration-500 text-center overflow-hidden"
                    >
                      {/* Logo de fondo */}
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          backgroundImage: `url(${getTechLogo(item)})`,
                          backgroundSize: '45%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      ></div>

                      {/* Degradado radial desde los bordes hacia el centro para suavizar */}
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(17, 24, 39, 0.95) 50%, rgba(17, 24, 39, 0.98) 100%)'
                        }}
                      ></div>

                      {/* Overlay adicional para opacidad del logo */}
                      <div className="absolute inset-0 bg-background/75 rounded-xl"></div>

                      {/* Efecto hover */}
                      <div className="absolute inset-0 rounded-xl bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <span className="relative z-10 text-sm font-medium text-muted-foreground/70 group-hover:text-primary transition-colors duration-500 block">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

