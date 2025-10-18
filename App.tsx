import React, { useState } from 'react';
import Header from './components/Header';
import DashboardContent from './components/content/DashboardContent';
import TeamContent from './components/content/TeamContent';
import ReportsContent from './components/content/ReportsContent';
import AccountContent from './components/content/AccountContent';

const TABS = ['Calendar', 'Insights', 'Settings', 'Account'];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Calendar':
        return <DashboardContent />;
      case 'Insights':
        return <TeamContent />;
      case 'Settings':
        return <ReportsContent />;
      case 'Account':
        return <AccountContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;