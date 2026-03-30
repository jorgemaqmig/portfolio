import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "45dec65e-2576-4b06-a0c6-192ce2e64b44",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Mensaje de contacto de ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${email}`,
      label: email
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: linkedin,
      label: 'Visitar perfil'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: github,
      label: 'Visitar perfil'
    }
  ];

  return (
    <div className="w-full py-24 px-4 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-28">
          <span className='text-xs font-semibold tracking-[0.3em] uppercase text-primary/50 mb-6 block'>
            Hablemos
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
            Contacto
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto rounded-full' />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Redes Sociales */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              Plataformas de contacto
            </h3>
            <p className="text-muted-foreground/70 mb-10 pl-[52px]">
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
                    className="group flex items-center gap-5 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-white/[0.06] hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-14 h-14 rounded-2xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/20 transition-colors duration-500 relative z-10">
                      <Icon className="w-6 h-6 text-muted-foreground/60 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground/50">
                        {social.label}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2 relative z-10">
                      <Send className="w-5 h-5 text-primary/60" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              Envíame un mensaje
            </h3>
            <p className="text-muted-foreground/70 mb-10 pl-[52px]">
              Completa el formulario y me pondré en contacto contigo lo antes posible.
            </p>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06] relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-white/[0.06] transition-all duration-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-white/[0.06] transition-all duration-500"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-white/[0.06] transition-all duration-500 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2.5"
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

                {/* Feedback de envío */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 animate-in fade-in slide-in-from-top-2 duration-500">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">¡Mensaje enviado con éxito! Te responderé pronto.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 animate-in fade-in slide-in-from-top-2 duration-500">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
