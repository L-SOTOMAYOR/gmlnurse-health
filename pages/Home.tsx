import React from 'react';
import { ChevronRight, Shield, Clock, Award, Phone, CheckCircle, Home as HomeIcon, UserCheck, Calendar, Quote, ArrowRight } from 'lucide-react';
import { SERVICES, CONTACT_INFO, TESTIMONIALS, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Medical Professional"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl animate-fade-in text-white text-shadow-sm">
            <div className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full mb-6 font-bold text-sm tracking-wide shadow-lg">
              <Shield size={16} />
              <span>CERTIFICADOS Y PROFESIONALES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              GML Nurse <span className="text-emerald-400">Infusion</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed font-light italic">
              "{CONTACT_INFO.tagline}"
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#/servicios" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-emerald-700 transition-all flex items-center justify-center shadow-xl shadow-emerald-900/40 hover:scale-105"
              >
                Nuestros Servicios <ChevronRight className="ml-2" />
              </a>
              <a 
                href="#/contacto" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-white hover:text-slate-900 transition-all hover:scale-105"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Por qué elegirnos?</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon className="w-8 h-8" />, title: 'Atención domiciliaria', desc: 'Llevamos el cuidado clínico a la comodidad de tu hogar u oficina.' },
              { icon: <Award className="w-8 h-8" />, title: 'Personal certificado', desc: 'Enfermeras profesionales con años de experiencia clínica.' },
              { icon: <UserCheck className="w-8 h-8" />, title: 'Tratamientos personalizados', desc: 'Cada infusión y masaje se adapta a tus necesidades específicas.' },
              { icon: <Calendar className="w-8 h-8" />, title: 'Horarios flexibles', desc: 'Atendemos bajo previa cita ajustándonos a tu ritmo de vida.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 reveal">
                <div className="text-emerald-600 mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (All 6) */}
      <section className="py-24 bg-white" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Servicios Especializados</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ofrecemos soluciones de salud avanzadas diseñadas para tu recuperación y vitalidad en todo Puerto Rico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-slate-100 reveal"
              >
                <div className="h-56 overflow-hidden">
                   <img src={service.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={service.title} />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 transform -mt-16 relative z-10 shadow-lg group-hover:rotate-12 transition-transform">
                    {getIcon(service.icon, "w-7 h-7")}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <a href="#/servicios" className="text-emerald-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                    Saber más <ChevronRight size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Preview */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 reveal">
              <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide">
                NUESTRO COMPROMISO
              </div>
              <h2 className="text-4xl font-bold mb-8">Atención Profesional en Puerto Rico</h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-8 italic border-l-4 border-emerald-500 pl-6">
                "Proveer cuidados de enfermería a domicilio con atención individualizada, compasiva y de calidad, asegurando el bienestar integral de nuestros pacientes."
              </p>
              <p className="text-slate-400 text-lg mb-10">
                GML Nurse Infusion es más que un servicio de enfermería; somos tu aliado en salud. Atendemos pacientes en toda la isla, brindando la seguridad de una clínica en la comodidad de tu hogar.
              </p>
              <a 
                href="#/sobre-nosotros" 
                className="inline-flex items-center text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors group"
              >
                Conocer más sobre nosotros <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="md:w-1/2 reveal">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-emerald-500/30 rounded-3xl translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipo GML Nurse" 
                  className="relative z-10 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que dicen nuestros pacientes</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 reveal relative">
                <Quote className="absolute top-6 right-8 text-emerald-100 w-12 h-12" />
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-emerald-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Listo para transformar tu salud?</h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed">
            Nuestros especialistas están listos para atenderte. Agenda tu cita hoy mismo y siente la diferencia de un cuidado profesional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={CONTACT_INFO.whatsapp} 
              className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all flex items-center shadow-2xl hover:scale-105"
            >
              Contactar por WhatsApp
            </a>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-60">Llámanos</p>
                <p className="text-xl font-bold">939-254-2268</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Star: React.FC<{ size: number; fill: string; className?: string }> = ({ size, fill, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Home;