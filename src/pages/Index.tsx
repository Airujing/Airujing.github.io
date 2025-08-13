import { useState } from 'react';
import Header from '@/components/Header';
import Home from '@/components/sections/Home';
import DomainSales from '@/components/sections/DomainSales';
import Contact from '@/components/sections/Contact';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'domains':
        return <DomainSales />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Airujing. {t('allRightsReserved')}
          </p>
        </div>
      </footer>
    </div>
  );
}
