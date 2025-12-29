import React, { useState } from 'react';
import LockScreen from './components/LockScreen.jsx';
import MainPage from './components/MainPage.jsx';

const App = () => {
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