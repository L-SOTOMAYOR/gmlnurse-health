
import React from 'react';
import { Target, Eye, Heart, Star, Users, ShieldCheck, Stethoscope, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="https://i.imgur.com/sNQdvZM.jpeg"
                alt="GML Nurse Infusion"
                className="h-16 w-16 rounded-full object-cover shadow-lg mb-6"
              />
              <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">Expertos en tu <span className="text-emerald-600">Bienestar</span></h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                GML Nurse Infusion nació con la visión de revolucionar el cuidado de la salud preventivo y postoperatorio. Entendemos que el bienestar comienza con la atención personalizada y el uso de las mejores prácticas clínicas.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nuestro equipo de enfermería profesional está dedicado a proporcionar tratamientos que no solo curan, sino que revitalizan. Nos enorgullecemos de llevar la clínica a tu puerta o recibirte en nuestras cómodas instalaciones con el más alto estándar de higiene y profesionalismo.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute top-0 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                 alt="Enfermera Profesional"
                 loading="lazy"
                 className="relative z-10 rounded-2xl shadow-2xl border-4 border-white transform lg:rotate-2"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-slate-800 p-12 rounded-3xl relative overflow-hidden group hover:bg-emerald-600 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
              <Target className="w-16 h-16 text-emerald-500 mb-8 group-hover:text-white" />
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-slate-400 text-lg leading-relaxed group-hover:text-emerald-50">
                Proveer servicios de enfermería especializados y tratamientos de bienestar de la más alta calidad, garantizando la seguridad y satisfacción de nuestros pacientes a través de un trato humano, ético y profesional.
              </p>
            </div>
            <div className="bg-slate-800 p-12 rounded-3xl relative overflow-hidden group hover:bg-emerald-600 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
              <Eye className="w-16 h-16 text-emerald-500 mb-8 group-hover:text-white" />
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-slate-400 text-lg leading-relaxed group-hover:text-emerald-50">
                Ser la institución líder en servicios de infusión y cuidados postoperatorios, reconocida por nuestra excelencia clínica, innovación en tratamientos de bienestar y el impacto positivo en la salud de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Valores</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-emerald-600" />, title: 'Pasión por el Cuidado', desc: 'Amamos lo que hacemos y se nota en cada atención.' },
              { icon: <ShieldCheck className="text-emerald-600" />, title: 'Ética y Transparencia', desc: 'Actuamos con integridad total y honestidad médica.' },
              { icon: <Users className="text-emerald-600" />, title: 'Trato Humano', desc: 'Cada paciente es parte de nuestra familia.' },
              { icon: <Star className="text-emerald-600" />, title: 'Excelencia', desc: 'Buscamos la perfección en cada procedimiento.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Credentials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Profesionales certificados con años de experiencia clínica dedicados a tu bienestar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enfermería Graduada</h3>
              <p className="text-slate-600">Personal con licencia activa y educación continua en técnicas avanzadas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Certificaciones Activas</h3>
              <p className="text-slate-600">Cumplimos con todos los requisitos regulatorios y de certificación profesional.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Protocolos de Seguridad</h3>
              <p className="text-slate-600">Seguimos estrictos protocolos de esterilización y manejo seguro de materiales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comienza Tu Camino Hacia el Bienestar</h2>
          <p className="text-emerald-50 text-xl mb-10 leading-relaxed">
            Nuestro equipo profesional está listo para ayudarte. Explora nuestros servicios o agenda tu cita hoy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#/servicios"
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Ver Nuestros Servicios
            </a>
            <a
              href="https://wa.me/19392542268?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-700 transition-all"
            >
              Agenda tu Cita por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
