import React, { useState } from 'react';
import LockScreen from './components/LockScreen';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {unlocked ? (
        <MainPage />
      ) : (
        <LockScreen onUnlock={() => setUnlocked(true)} />
      )}
    </>
  );
};

export default App;