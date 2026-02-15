
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#/':
        return <Home />;
      case '#/servicios':
        return <Services />;
      case '#/sobre-nosotros':
        return <About />;
      case '#/contacto':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
      <AIConsultant />
    </Layout>
  );
};

export default App;
