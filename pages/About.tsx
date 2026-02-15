
import React from 'react';
import { Target, Eye, Heart, Star, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
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
    </div>
  );
};

export default About;
