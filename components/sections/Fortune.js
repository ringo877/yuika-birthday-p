import React, { useState, useEffect } from 'react';
import htm from 'htm';
import { Sparkles, Stars } from 'lucide-react';
import { getFortune } from '../../services/geminiService.js';

const html = htm.bind(React.createElement);

const LOADING_MESSAGES = [
  "星の配置を確認中...",
  "ゆいかちゃんの運勢を計算中...",
  "未来を覗いています...",
  "星たちと通信中...",
  "運命のメッセージを受信中..."
];

const Fortune = () => {
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(LOADING_MESSAGES[0]);

  useEffect(() => {
    let interval;
    if (loading) {
      let i = 0;
      setLoadingText(LOADING_MESSAGES[0]);
      interval = setInterval(() => {
        i = (i + 1) % LOADING_MESSAGES.length;
        setLoadingText(LOADING_MESSAGES[i]);
      }, 3000); // Change message every 3 seconds
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handlePredict = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setPrediction('');
    
    const result = await getFortune(input);
    setPrediction(result);
    setLoading(false);
  };

  return html`
    <section id="fortune" className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Future Prediction</h2>
        <p className="text-gray-500 text-sm">ゆいかちゃんのこれからの1年を占う！</p>
      </div>

      <div className="bg-[#0F172A] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl text-white">
        <!-- Stars Background -->
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <${Stars} className="absolute top-8 right-8 text-yellow-300 w-6 h-6 opacity-80" />
          <${Stars} className="absolute bottom-8 left-8 text-pink-400 w-4 h-4 opacity-60" />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-50"></div>
          <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto w-full">
          <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center mb-4 border border-gray-600">
            <${Sparkles} className="w-6 h-6 text-yellow-400" />
          </div>

          <h3 className="text-xl font-bold mb-2">AI 運勢占い</h3>
          <p className="text-gray-400 text-sm mb-8 text-center">
            最近気になっていることや、今の気分を教えてね。<br/>
            星たちが未来を読み解きます。
          </p>

          <div className="w-full space-y-4">
             <input
              type="text"
              value=${input}
              onChange=${(e) => setInput(e.target.value)}
              placeholder="例：新しい趣味を始めたい！、仕事の運勢は？"
              className="w-full py-3 px-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              style=${{ fontSize: '16px' }} 
            />
            
            <button
              onClick=${handlePredict}
              disabled=${loading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 font-bold rounded-xl shadow-lg shadow-purple-900/50 hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 touch-manipulation"
            >
              ${loading ? html`
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   <span className="text-sm font-normal animate-pulse">${loadingText}</span>
                 </div>
              ` : html`
                 <span>占う</span>
                 <${Sparkles} className="w-4 h-4" />
              `}
            </button>
          </div>

          ${prediction && html`
            <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/5 animate-fade-in w-full">
               <p className="leading-relaxed text-purple-100 font-medium whitespace-pre-wrap">
                 ${prediction}
               </p>
            </div>
          `}
        </div>
      </div>
    </section>
  `;
};

export default Fortune;