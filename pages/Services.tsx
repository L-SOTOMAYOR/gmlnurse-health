
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { CheckCircle, Shield, Award, Activity, Clock } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Servicios de Salud Avanzados</h1>
            <p className="text-xl text-slate-600 italic">
              "Excelencia clínica y calidez humana en cada tratamiento. Llevamos el hospital a tu hogar."
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden reveal transition-all hover:shadow-xl ${index % 2 === 0 ? 'flex flex-col md:flex-row' : 'flex flex-col md:flex-row-reverse'}`}>
                <div className="w-full md:w-2/5 h-[350px] md:h-auto overflow-hidden">
                   <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                      {getIcon(service.icon, "w-6 h-6")}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      'Tratamiento personalizado',
                      'Enfermeras profesionales',
                      'Seguridad y esterilidad',
                      'Resultados óptimos'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-slate-700 font-medium">
                        <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/19392542268?text=Hola,%20me%20interesa%20información%20sobre%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100"
                    >
                      Solicitar Cita
                    </a>
                    <a 
                      href="#/contacto"
                      className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                    >
                      Más Información
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Trust Section */}
      <section className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">Comprometidos con tu seguridad</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50">
             <div className="flex flex-col items-center">
               <Shield className="w-12 h-12 mb-4 text-emerald-600" />
               <span className="font-bold text-slate-900">100% SEGURO</span>
             </div>
             <div className="flex flex-col items-center">
               <Award className="w-12 h-12 mb-4 text-emerald-600" />
               <span className="font-bold text-slate-900">CERTIFICADOS</span>
             </div>
             <div className="flex flex-col items-center">
               <Activity className="w-12 h-12 mb-4 text-emerald-600" />
               <span className="font-bold text-slate-900">MONITOREO</span>
             </div>
             <div className="flex flex-col items-center">
               <Clock className="w-12 h-12 mb-4 text-emerald-600" />
               <span className="font-bold text-slate-900">24/7 SOPORTE</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
