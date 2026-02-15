
import React from 'react';
import { SERVICES, getIcon } from '../constants';
// Added Shield, Award, Activity, Clock to imports
import { CheckCircle, Shield, Award, Activity, Clock } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-slate-600 italic">
              "Excelencia clínica y calidez humana en cada tratamiento"
            </p>
          </div>

          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl transform rotate-3 z-0"></div>
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      {getIcon(service.icon, "w-6 h-6")}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <li className="flex items-center space-x-2 text-slate-700">
                      <CheckCircle className="text-emerald-500 w-5 h-5" />
                      <span>Tratamiento personalizado</span>
                    </li>
                    <li className="flex items-center space-x-2 text-slate-700">
                      <CheckCircle className="text-emerald-500 w-5 h-5" />
                      <span>Profesionales graduados</span>
                    </li>
                    <li className="flex items-center space-x-2 text-slate-700">
                      <CheckCircle className="text-emerald-500 w-5 h-5" />
                      <span>Seguridad clínica</span>
                    </li>
                    <li className="flex items-center space-x-2 text-slate-700">
                      <CheckCircle className="text-emerald-500 w-5 h-5" />
                      <span>Resultados visibles</span>
                    </li>
                  </ul>
                  <a 
                    href={`https://wa.me/19392542268?text=Hola,%20me%20interesa%20información%20sobre%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg"
                  >
                    Consultar este servicio
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple symbolic icons representing trust */}
             <div className="flex flex-col items-center">
               <Shield className="w-12 h-12 mb-2 text-emerald-600" />
               <span className="font-bold">100% Seguro</span>
             </div>
             <div className="flex flex-col items-center">
               <Award className="w-12 h-12 mb-2 text-emerald-600" />
               <span className="font-bold">Alta Calidad</span>
             </div>
             <div className="flex flex-col items-center">
               <Activity className="w-12 h-12 mb-2 text-emerald-600" />
               <span className="font-bold">Personal Certificado</span>
             </div>
             <div className="flex flex-col items-center">
               <Clock className="w-12 h-12 mb-2 text-emerald-600" />
               <span className="font-bold">Respuesta Rápida</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
