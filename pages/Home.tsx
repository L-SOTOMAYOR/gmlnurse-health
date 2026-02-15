
import React from 'react';
import { ChevronRight, Shield, Clock, Award, Phone } from 'lucide-react';
import { SERVICES, CONTACT_INFO, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Medical Professional"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-bold text-sm tracking-wide">
              <Shield size={16} />
              <span>CERTIFICADOS Y PROFESIONALES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              GML Nurse <span className="text-emerald-600">Infusion</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light italic">
              "Deja tu salud en mano de profesionales"
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#/servicios" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-emerald-700 transition-all flex items-center justify-center shadow-xl shadow-emerald-200"
              >
                Nuestros Servicios <ChevronRight className="ml-2" />
              </a>
              <a 
                href="#/contacto" 
                className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-slate-900 hover:text-white transition-all"
              >
                Contáctanos
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 text-slate-500">
               <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Clock className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-tighter">Horario Flexible</p>
                    <p className="text-sm">Previa Cita</p>
                  </div>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Award className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-tighter">Personal Senior</p>
                    <p className="text-sm">Enfermería Graduada</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Servicios Destacados</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ofrecemos una amplia gama de tratamientos especializados para mejorar tu calidad de vida y bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                   <img src={service.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 transform -mt-16 relative z-10 shadow-lg group-hover:rotate-12 transition-transform">
                    {getIcon(service.icon, "w-7 h-7")}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#/servicios" className="text-emerald-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                    Saber más <ChevronRight size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#/servicios" className="inline-block border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-10 py-3 rounded-full font-bold transition-all">
              Ver todos los servicios
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Listo para transformar tu salud?</h2>
          <p className="text-emerald-50 text-xl mb-10 leading-relaxed">
            Nuestros especialistas están listos para atenderte. Agenda tu cita hoy mismo y siente la diferencia de un cuidado profesional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={CONTACT_INFO.whatsapp} 
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center shadow-2xl"
            >
              Contactar por WhatsApp
            </a>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-80">Llámanos</p>
                <p className="text-xl font-bold">939-254-2268</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
