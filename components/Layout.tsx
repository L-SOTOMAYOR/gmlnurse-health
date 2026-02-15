import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#/' },
    { name: 'Servicios', href: '#/servicios' },
    { name: 'Sobre Nosotros', href: '#/sobre-nosotros' },
    { name: 'Contacto', href: '#/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Heart className="text-white w-6 h-6" fill="currentColor" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                  GML Nurse
                </span>
                <span className={`text-xs font-medium ${scrolled ? 'text-emerald-600' : 'text-emerald-600 md:text-emerald-300'}`}>
                  Infusion
                </span>
              </div>
            </a>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-emerald-500 ${
                    scrolled ? 'text-slate-700' : 'text-slate-700 md:text-white text-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-200"
              >
                Cita por WhatsApp
              </a>
            </div>

            <button 
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300 border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-semibold text-slate-700 hover:text-emerald-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                 <a 
                  href={CONTACT_INFO.whatsapp}
                  className="block w-full text-center bg-emerald-500 text-white py-3 rounded-lg font-bold"
                >
                  Agendar Cita
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="text-emerald-500 w-8 h-8" fill="currentColor" />
                <span className="font-bold text-2xl">GML Nurse</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Expertos en cuidados de enfermería avanzada e infusiones para tu bienestar óptimo en la comodidad de tu espacio.
              </p>
              <div className="flex space-x-4">
                <a href={CONTACT_INFO.facebook} target="_blank" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={CONTACT_INFO.whatsappChannel} target="_blank" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Servicios</h3>
              <ul className="space-y-3">
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Sueroterapias</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Control de Peso</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Nano Mesoterapia</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Masajes Linfáticos</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Escleroterapia</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Cuidado de Heridas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Compañía</h3>
              <ul className="space-y-4">
                <li><a href="#/sobre-nosotros" className="text-slate-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#/contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#/servicios" className="text-slate-400 hover:text-white transition-colors">Todos los Servicios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-slate-400">
                  <Phone size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <p>939-254-2268</p>
                    <p>214-244-4685</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-slate-400">
                   <div className="w-5 h-5 bg-emerald-500/20 flex items-center justify-center rounded text-emerald-500 text-xs font-bold shrink-0">@</div>
                   <p className="break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} GML Nurse Infusion. Todos los derechos reservados.</p>
          </div>
        </div>

        {/* Floating WhatsApp Button - Direct Link with Pulse Animation */}
        <a 
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group flex items-center justify-center animate-whatsapp"
        >
          <MessageCircle size={32} className="relative z-10" />
          <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
            ¡Escríbenos por WhatsApp!
          </span>
        </a>
      </footer>
      
      <style>{`
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default Layout;