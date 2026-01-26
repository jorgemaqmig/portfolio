import React from 'react';
import { GraduationCap, Code, Calendar, CheckCircle2 } from 'lucide-react';

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
    <div className="w-full min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Información Personal */}
          <div className="bg-card rounded-2xl p-8 border border-border/20 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/20">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{name}</h3>
                <p className="text-primary">{title}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Desarrollador Full Stack con formación en desarrollo web y multiplataforma.
              Especializado en crear aplicaciones modernas, escalables y de alto rendimiento
              utilizando las últimas tecnologías y mejores prácticas del sector.
            </p>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-6 border border-border/20 hover:border-secondary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground text-sm">Grados Superiores</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/20 hover:border-secondary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground text-sm">Tecnologías</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/20 hover:border-secondary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Full</div>
              <div className="text-muted-foreground text-sm">Stack</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/20 hover:border-secondary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Web</div>
              <div className="text-muted-foreground text-sm">Multiplataforma</div>
            </div>
          </div>
        </div>

        {/* Línea del Tiempo de Estudios */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Formación Académica
          </h3>

          <div className="relative">
            {/* Línea vertical - centrada perfectamente */}
            <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {education.map((item) => (
                <div key={item.id} className="relative pl-20">
                  {/* Punto en la línea - centrado verticalmente en la mitad de la card */}
                  <div className={`absolute left-[24px] top-1/2 w-6 h-6 rounded-full border-4 border-background z-10 transform -translate-x-1/2 -translate-y-1/2 ${item.highlight
                    ? 'bg-gradient-to-br from-primary to-primary ring-4 ring-primary/40 shadow-lg shadow-primary/50'
                    : 'bg-muted ring-2 ring-muted/30'
                    }`}>
                  </div>

                  {/* Contenido */}
                  <div className={`relative bg-card rounded-2xl p-6 md:p-8 border ${item.highlight
                    ? 'border-primary/60 shadow-xl shadow-primary/20'
                    : 'border-border/50 shadow-lg'
                    }`}>
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${item.highlight
                              ? 'bg-primary/20'
                              : 'bg-muted/30'
                              }`}>
                              <GraduationCap className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'
                                }`} />
                            </div>
                            <h4 className={`text-2xl md:text-3xl font-bold ${item.highlight ? 'text-primary' : 'text-foreground'
                              }`}>
                              {item.title}
                            </h4>
                          </div>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${item.highlight
                          ? 'bg-primary/10 border border-primary/30'
                          : 'bg-muted/50 border border-muted/30'
                          }`}>
                          <Calendar className={`w-4 h-4 ${item.highlight ? 'text-purple-400' : 'text-gray-400'
                            }`} />
                          <span className={`text-sm font-medium ${item.highlight ? 'text-purple-300' : 'text-gray-300'
                            }`}>
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
                        {item.description}
                      </p>

                      {item.highlight && (
                        <div className="mt-6 pt-4 border-t border-primary/20">
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Doble titulación en Desarrollo de Aplicaciones Web y Multiplataforma</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decoración de esquina */}
                    {item.highlight && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías y Habilidades */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-12 flex items-center gap-3">
            <Code className="w-8 h-8 text-primary" />
            Tecnologías y Habilidades
          </h3>

          <div className="space-y-10">
            {technologies.map((tech, index) => (
              <div key={index} className="relative">
                {/* Título de categoría */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground px-4">
                    {tech.category}
                  </h4>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                </div>

                {/* Grid de tecnologías */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group relative bg-card rounded-xl p-4 border border-border/50 hover:border-secondary/60 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center overflow-hidden"
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
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <span className="relative z-10 text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors duration-300 block">
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

