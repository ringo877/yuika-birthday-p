import React, { useState } from 'react';
import htm from 'htm';
import LockScreen from './components/LockScreen.js';
import MainPage from './components/MainPage.js';

const html = htm.bind(React.createElement);

const App = () => {
  const [unlocked, setUnlocked] = useState(false);

  return html`
    ${unlocked 
      ? html`<${MainPage} />` 
      : html`<${LockScreen} onUnlock=${() => setUnlocked(true)} />`
    }
  `;
};

export default App;