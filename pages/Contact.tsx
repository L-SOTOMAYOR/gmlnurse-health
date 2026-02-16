
import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Send, MapPin, MessageSquare, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const faqData = [
  {
    question: '¿En qué áreas ofrecen servicio a domicilio?',
    answer: 'Ofrecemos servicio a domicilio en todo Puerto Rico. También contamos con atención en nuestra oficina. Contáctanos para confirmar disponibilidad en tu área.'
  },
  {
    question: '¿Cuánto dura una sesión de sueroterapia?',
    answer: 'Una sesión de sueroterapia generalmente dura entre 30 a 60 minutos, dependiendo del tipo de infusión y las necesidades del paciente. La evaluación inicial puede tomar unos minutos adicionales.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, ATH Móvil, transferencias bancarias y tarjetas de crédito/débito. Consulta con nosotros para más detalles sobre opciones de pago.'
  },
  {
    question: '¿Necesito receta médica para los tratamientos?',
    answer: 'Algunos tratamientos como las sueroterapias y la escleroterapia pueden requerir evaluación o prescripción médica previa. Nuestro equipo te orientará sobre los requisitos específicos para cada servicio.'
  },
  {
    question: '¿Ofrecen consultas virtuales?',
    answer: 'Sí, ofrecemos consultas iniciales por WhatsApp o videollamada para evaluar tus necesidades y recomendar el tratamiento adecuado antes de tu cita presencial.'
  },
  {
    question: '¿Es seguro el servicio a domicilio?',
    answer: 'Absolutamente. Nuestro equipo está compuesto por enfermeras graduadas y certificadas. Utilizamos equipo estéril y seguimos todos los protocolos de seguridad e higiene médica en cada visita.'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola, me gustaría solicitar información.`,
      ``,
      `*Nombre:* ${formData.name}`,
      formData.phone ? `*Teléfono:* ${formData.phone}` : '',
      formData.email ? `*Email:* ${formData.email}` : '',
      formData.service ? `*Servicio de interés:* ${formData.service}` : '',
      formData.message ? `*Mensaje:* ${formData.message}` : ''
    ].filter(Boolean).join('\n');
    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/19392542268?text=${encoded}`, '_blank');
  };

  const serviceLabels: Record<string, string> = {
    sueroterapia: 'Sueroterapias',
    peso: 'Control de Peso',
    mesoterapia: 'Mesoterapia',
    linfatico: 'Masajes Linfáticos',
    esclero: 'Escleroterapia',
    heridas: 'Cuidado de Heridas'
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Contáctanos</h1>
            <p className="text-xl text-slate-600">Estamos aquí para escucharte y cuidar de ti</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
                <Send className="mr-3 text-emerald-600" /> Envíanos un mensaje
              </h2>
              <p className="text-slate-500 mb-8 text-sm">Al enviar, se abrirá WhatsApp con tu información para atenderte de inmediato.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nombre Completo</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Ej: María Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Teléfono</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="939-000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="maria@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Servicio de Interés</label>
                  <select
                    id="contact-service"
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: serviceLabels[e.target.value] || e.target.value})}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="sueroterapia">Sueroterapias</option>
                    <option value="peso">Control de Peso</option>
                    <option value="mesoterapia">Mesoterapia</option>
                    <option value="linfatico">Masajes Linfáticos</option>
                    <option value="esclero">Escleroterapia</option>
                    <option value="heridas">Cuidado de Heridas</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Mensaje</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200 flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -mr-16 -mt-16"></div>
                <h2 className="text-2xl font-bold mb-8">Información de Contacto</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Teléfonos</p>
                      <a href="tel:+19392542268" className="block text-xl font-bold hover:text-emerald-400 transition-colors">PR: 939-254-2268</a>
                      <a href="tel:+12142444685" className="block text-xl font-bold hover:text-emerald-400 transition-colors">US: 214-244-4685</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-emerald-400 transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Ubicación</p>
                      <p className="text-xl font-bold">Servicio a Domicilio / Oficina</p>
                      <p className="text-slate-400">Puerto Rico — Atención personalizada</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-800">
                  <p className="text-slate-400 mb-6 font-bold uppercase tracking-wider">Síguenos</p>
                  <div className="flex space-x-6">
                    <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors">
                      <Facebook size={24} />
                      <span className="font-bold">Facebook</span>
                    </a>
                    <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors">
                      <Instagram size={24} />
                      <span className="font-bold">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={`${CONTACT_INFO.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-emerald-100 border-2 border-emerald-500 p-8 rounded-3xl text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <MessageSquare size={32} />
                    <div>
                      <p className="text-xl font-bold">Respuesta Inmediata</p>
                      <p className="group-hover:text-emerald-50">Chatea con nosotros por WhatsApp</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-emerald-500 group-hover:bg-white/20 rounded-full flex items-center justify-center text-white">
                    <Send size={20} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">Encuentra respuestas a las dudas más comunes sobre nuestros servicios.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-lg font-bold text-slate-900 pr-4">{item.question}</span>
                  <ChevronDown
                    size={22}
                    className={`text-emerald-600 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
