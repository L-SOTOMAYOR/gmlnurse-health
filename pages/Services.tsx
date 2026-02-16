
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { CheckCircle, Shield, Award, Activity, Clock, MapPin, Stethoscope } from 'lucide-react';

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
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center scroll-mt-28`}>
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl transform rotate-3 z-0"></div>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      loading="lazy"
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
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-700">
                        <CheckCircle className="text-emerald-500 w-5 h-5 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500 mb-8 italic">Consulte para precios y disponibilidad</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
               <Stethoscope className="w-12 h-12 mb-3 text-emerald-600" />
               <span className="font-bold text-slate-900">Enfermera Graduada</span>
               <span className="text-sm text-slate-500 mt-1">Personal certificado</span>
             </div>
             <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
               <MapPin className="w-12 h-12 mb-3 text-emerald-600" />
               <span className="font-bold text-slate-900">Servicio a Domicilio</span>
               <span className="text-sm text-slate-500 mt-1">Todo Puerto Rico</span>
             </div>
             <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
               <Shield className="w-12 h-12 mb-3 text-emerald-600" />
               <span className="font-bold text-slate-900">Protocolos Estériles</span>
               <span className="text-sm text-slate-500 mt-1">Seguridad clínica</span>
             </div>
             <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
               <Clock className="w-12 h-12 mb-3 text-emerald-600" />
               <span className="font-bold text-slate-900">Horario Flexible</span>
               <span className="text-sm text-slate-500 mt-1">Lunes a Sábado</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
