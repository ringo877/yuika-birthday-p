import React, { useState } from 'react';
import htm from 'htm';
import { Lock, Key } from 'lucide-react';

const html = htm.bind(React.createElement);

const LockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (password.toLowerCase() === 'yuika') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return html`
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 px-4">
      <div className="bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-xl max-w-md w-full text-center transform transition-all hover:scale-[1.01]">
        <div className="mb-6 flex justify-center relative">
           <div className="bg-pink-100 p-4 rounded-full">
             <${Lock} className="w-8 h-8 text-yuika-pink" />
             <div className="absolute top-0 right-1/3 transform translate-x-4 -translate-y-1">
                <span className="text-red-500 text-xl">♥</span>
             </div>
           </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Secret Birthday Site</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          この先は招待制の特別サイトです。<br />
          合言葉を入力してね！
        </p>

        <div className="space-y-4">
          <div className="relative">
            <${Key} className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="パスワード"
              value=${password}
              onChange=${(e) => setPassword(e.target.value)}
              className=${`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-colors text-base ${
                error ? 'border-red-400 bg-red-50' : 'border-pink-100 focus:border-yuika-pink bg-white'
              }`}
              style=${{ fontSize: '16px' }} 
              onKeyDown=${(e) => e.key === 'Enter' && handleUnlock()}
            />
          </div>
          
          <button
            onClick=${handleUnlock}
            className="w-full py-3.5 bg-gradient-to-r from-yuika-pink to-pink-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity transform active:scale-95 touch-manipulation"
          >
            ロック解除
          </button>
        </div>
      </div>
    </div>
  `;
};

export default LockScreen;