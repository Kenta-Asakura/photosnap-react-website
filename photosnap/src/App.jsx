import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'stories':
        return <Stories />;
      case 'features':
        return <Features />;
      case 'pricing':
        return <Pricing />;
      default:
        return <Home />;
    }
  };

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header setCurrentPage={handleSetCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={handleSetCurrentPage} />
    </>
  );
}

export default App;
