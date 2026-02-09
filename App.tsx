
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortalSection from './components/PortalSection';
import AppViewer from './components/AppViewer';
import Footer from './components/Footer';
import { managementPrograms, managementSystems } from './constants';
import type { AppInfo } from './types';

const App: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);

  const handleSelectApp = useCallback((app: AppInfo) => {
    if (!app.url) {
      alert('현재 개발 중인 기능입니다. 곧 오픈될 예정입니다.');
      return;
    }
    setSelectedApp(app);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedApp(null);
  }, []);

  return (
    <div className={`bg-bg-light font-sans text-text-main flex flex-col ${selectedApp ? 'h-screen' : 'min-h-screen'}`}>
      <Header showHomeButton={!!selectedApp} onGoHome={handleGoHome} />

      {selectedApp ? (
        <AppViewer app={selectedApp} />
      ) : (
        <>
          <main id="main-content" className="flex-grow">
            <Hero />
            <PortalSection
              title="Management Programs"
              description="효율적인 팀 관리를 위한 업무 자동화 툴"
              apps={managementPrograms}
              onCardClick={handleSelectApp}
            />
            <PortalSection
              title="Management System"
              description="강사 관리를 위한 업무 툴"
              apps={managementSystems}
              onCardClick={handleSelectApp}
            />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
