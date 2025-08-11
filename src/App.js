import React, { useState } from 'react';
import HomePage from './pages/home';
import CategoryPages from './pages/category-pages';
import DataEngineerPage from './pages/data-engineer';
import HireTalentPage from './pages/hire-talent';
import UiUxDesignerPage from './pages/ui-ux-designer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'category-pages':
        return <CategoryPages />;
      case 'data-engineer':
        return <DataEngineerPage />;
      case 'hire-talent':
        return <HireTalentPage />;
      case 'ui-ux-designer':
        return <UiUxDesignerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <button onClick={() => setCurrentPage('home')} style={{ margin: '0 10px' }}>
          Home
        </button>
        <button onClick={() => setCurrentPage('category-pages')} style={{ margin: '0 10px' }}>
          Category Pages
        </button>
        <button onClick={() => setCurrentPage('data-engineer')} style={{ margin: '0 10px' }}>
          Data Engineer
        </button>
        <button onClick={() => setCurrentPage('hire-talent')} style={{ margin: '0 10px' }}>
          Hire Talent
        </button>
        <button onClick={() => setCurrentPage('ui-ux-designer')} style={{ margin: '0 10px' }}>
          UI/UX Designer
        </button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;