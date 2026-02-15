
import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Send, MapPin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
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
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <Send className="mr-3 text-emerald-600" /> Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Ej: María Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="939-000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="maria@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Servicio de Interés</label>
                  <select 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
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
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Mensaje</label>
                  <textarea 
                    rows={4}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    status === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                  }`}
                >
                  {status === 'idle' && 'Enviar Solicitud'}
                  {status === 'sending' && 'Enviando...'}
                  {status === 'success' && '¡Enviado con éxito!'}
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
                      <p className="text-xl font-bold">939-254-2268</p>
                      <p className="text-xl font-bold">214-244-4685</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-xl font-bold">{CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Ubicación</p>
                      <p className="text-xl font-bold">Servicio a Domicilio / Oficina</p>
                      <p className="text-slate-400">Atención personalizada en tu área</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-800">
                  <p className="text-slate-400 mb-6 font-bold uppercase tracking-wider">Síguenos</p>
                  <div className="flex space-x-6">
                    <a href={CONTACT_INFO.facebook} className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors">
                      <Facebook size={24} />
                      <span className="font-bold">Facebook</span>
                    </a>
                    <a href={CONTACT_INFO.instagram} className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors">
                      <Instagram size={24} />
                      <span className="font-bold">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <a 
                href={CONTACT_INFO.whatsapp}
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
    </div>
  );
};

export default Contact;
