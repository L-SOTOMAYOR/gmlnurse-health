
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, MessageCircle, ChevronUp } from 'lucide-react';
import { CONTACT_INFO, COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHash = () => setCurrentPath(window.location.hash || '#/');
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const isActive = (href: string) => {
    const base = currentPath.split('/').slice(0, 2).join('/');
    const hrefBase = href.split('/').slice(0, 2).join('/');
    if (href === '#/' && (base === '#/' || base === '#')) return true;
    if (href !== '#/' && hrefBase === base) return true;
    return false;
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'Inicio', href: '#/' },
    { name: 'Servicios', href: '#/servicios' },
    { name: 'Sobre Nosotros', href: '#/sobre-nosotros' },
    { name: 'Contacto', href: '#/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to Content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">
        Saltar al contenido
      </a>

      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#/" className="flex items-center space-x-3 group">
              <img
                src="https://i.imgur.com/sNQdvZM.jpeg"
                alt="GML Nurse Infusion"
                className="h-11 w-11 rounded-full object-cover transform group-hover:scale-110 transition-transform shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-slate-900">
                  GML Nurse
                </span>
                <span className="text-xs font-medium text-emerald-600">
                  Infusion
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-emerald-500 ${
                    isActive(link.href)
                      ? 'text-emerald-500 border-b-2 border-emerald-500 pb-1'
                      : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`${CONTACT_INFO.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-200"
              >
                Cita por WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in-down border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-lg font-semibold hover:text-emerald-500 ${
                    isActive(link.href) ? 'text-emerald-600' : 'text-slate-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={CONTACT_INFO.whatsapp}
                className="block w-full text-center bg-emerald-500 text-white py-3 rounded-lg font-bold"
              >
                Cita WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://i.imgur.com/sNQdvZM.jpeg"
                  alt="GML Nurse Infusion"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold text-2xl">GML Nurse</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Expertos en cuidados de enfermería avanzada e infusiones para tu bienestar óptimo en la comodidad de tu espacio.
              </p>
              <div className="flex space-x-4">
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Servicios</h3>
              <ul className="space-y-4">
                <li><a href="#/servicios/iv-therapy" className="text-slate-400 hover:text-white transition-colors">Sueroterapias</a></li>
                <li><a href="#/servicios/weight-control" className="text-slate-400 hover:text-white transition-colors">Control de Peso</a></li>
                <li><a href="#/servicios/mesotherapy" className="text-slate-400 hover:text-white transition-colors">Mesoterapia</a></li>
                <li><a href="#/servicios/wound-care" className="text-slate-400 hover:text-white transition-colors">Postoperatorio</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Compañía</h3>
              <ul className="space-y-4">
                <li><a href="#/sobre-nosotros" className="text-slate-400 hover:text-white transition-colors">Misión y Visión</a></li>
                <li><a href="#/sobre-nosotros" className="text-slate-400 hover:text-white transition-colors">Valores</a></li>
                <li><a href="#/contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#/contacto/faq" className="text-slate-400 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-500">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-slate-400">
                  <Phone size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <a href="tel:+19392542268" className="block hover:text-white transition-colors">PR: 939-254-2268</a>
                    <a href="tel:+12142444685" className="block hover:text-white transition-colors">US: 214-244-4685</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-slate-400">
                   <div className="w-5 h-5 bg-emerald-500/20 flex items-center justify-center rounded text-emerald-500 text-xs font-bold">W</div>
                   <p>Servicio a domicilio y en oficina</p>
                </div>
                <div className="flex items-start space-x-3 text-slate-400">
                   <div className="w-5 h-5 bg-emerald-500/20 flex items-center justify-center rounded text-emerald-500 text-xs font-bold">H</div>
                   <p>{CONTACT_INFO.businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} GML Nurse Infusion. Todos los derechos reservados.</p>
            <p className="mt-2 text-slate-600">gmlnurse.health &bull; Política de Privacidad &bull; Términos de Uso</p>
          </div>
        </div>

        {/* Back to Top */}
        {scrolled && (
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-6 left-6 bg-slate-800 text-white p-3 rounded-full shadow-xl hover:bg-emerald-500 transition-all z-40"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Floating WhatsApp */}
        <a
          href={CONTACT_INFO.whatsapp}
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
            ¡Chatea con nosotros!
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
