import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

interface ContactProps {
  email?: string;
  linkedin?: string;
  github?: string;
}

const Contact: React.FC<ContactProps> = ({
  email = "jorgemaqmig@gmail.com",
  linkedin = "https://www.linkedin.com/in/jorge-maqueda-a14314399/",
  github = "https://github.com/jorgemaqmig"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando un servicio como EmailJS o tu propio backend

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('¡Mensaje enviado! Te contactaré pronto.');
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${email}`,
      color: 'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: linkedin,
      color: 'hover:bg-blue-600/20 hover:border-blue-600/50 hover:text-blue-400',
      bgColor: 'bg-blue-600/10 border-blue-600/30'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: github,
      color: 'hover:bg-gray-500/20 hover:border-gray-500/50 hover:text-gray-300',
      bgColor: 'bg-gray-500/10 border-gray-500/30'
    }
  ];

  return (
    <div className="w-full min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Redes Sociales */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              Plataformas de contacto
            </h3>
            <p className="text-muted-foreground mb-8">
              Encuéntrame en estas plataformas o envíame un mensaje directo.
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${social.bgColor} ${social.color} backdrop-blur-sm`}
                  >
                    <div className="p-3 rounded-lg bg-secondary/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.name === 'Email' ? email : 'Visitar perfil'}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Send className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Envíame un mensaje
            </h3>
            <p className="text-muted-foreground mb-8">
              Completa el formulario y me pondré en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              También puedes contactarme directamente por email
            </p>
            <a
              href={`mailto:${email}`}
              className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

