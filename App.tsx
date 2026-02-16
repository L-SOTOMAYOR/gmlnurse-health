
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const NotFound: React.FC = () => (
  <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-8">Página no encontrada</p>
      <a href="#/" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors">
        Volver al Inicio
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);

      // Check for service deep-link anchors like #/servicios/iv-therapy
      const serviceMatch = hash.match(/^#\/servicios\/(.+)$/);
      if (serviceMatch) {
        // Scroll to top first, then scroll to the service element after render
        window.scrollTo(0, 0);
        setTimeout(() => {
          const el = document.getElementById(serviceMatch[1]);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else if (hash === '#/contacto/faq') {
        window.scrollTo(0, 0);
        setTimeout(() => {
          const el = document.getElementById('faq');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Also handle initial load deep-links
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // Parse the base route (before any sub-path)
    const baseRoute = currentHash.split('/').slice(0, 2).join('/');
    const routeKey = '#/' + (baseRoute.split('/')[1] || '');

    switch (routeKey) {
      case '#/':
        return <Home />;
      case '#/servicios':
        return <Services />;
      case '#/sobre-nosotros':
        return <About />;
      case '#/contacto':
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
