import React, { useState } from 'react';
import { Palette, Image as ImageIcon, Download } from 'lucide-react';
import { generateBirthdayImage } from '../../services/geminiService';

const AiArt: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    
    const url = await generateBirthdayImage(prompt);
    setImageUrl(url);
    setLoading(false);
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    try {
      // Convert Data URI to Blob for more reliable download
      const byteString = atob(imageUrl.split(',')[1]);
      const mimeString = imageUrl.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `yuika_birthday_art_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (e) {
      console.error("Download failed", e);
      // Fallback
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `yuika_birthday_art_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="ai-art" className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Birthday Art Maker</h2>
        <p className="text-gray-500 text-sm">AIで世界に一枚だけのイラストを作ろう！</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Input Card */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-pink-600 font-bold">
              <Palette className="w-5 h-5" />
              何を描く？
            </div>

            <label className="block text-xs font-bold text-gray-700 mb-2">描きたいイメージ</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="例：バースデーケーキを食べる猫、花束を持ったうさぎ、未来のパーティー会場..."
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl h-32 md:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-200 mb-6"
              style={{ fontSize: '16px' }}
            />
          </div>

          <div>
             <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-md shadow-pink-200 text-sm flex items-center justify-center gap-2 disabled:opacity-50 touch-manipulation"
            >
              {loading ? (
                 <>
                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                   生成中...
                 </>
              ) : (
                <>
                  <SparklesIcon className="w-4 h-4" />
                  イラストを生成する
                </>
              )}
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-2">※生成には少し時間がかかります（10〜20秒くらい）</p>
          </div>
        </div>

        {/* Display Card */}
        <div className={`bg-white p-4 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center justify-center relative overflow-hidden group ${!imageUrl ? 'aspect-square' : ''}`}>
            {/* Pink accent line */}
            <div className="absolute top-4 right-4 bottom-4 w-1 bg-gradient-to-b from-pink-300 to-transparent opacity-50 rounded-full pointer-events-none"></div>
            <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-pink-300 to-transparent opacity-50 rounded-full pointer-events-none"></div>
            
            {!imageUrl ? (
                <div className="text-center text-gray-300">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="text-xs">上のフォームから入力して<br/>ボタンを押してね！</p>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col items-center animate-fade-in z-10">
                  <img src={imageUrl} alt="Generated Birthday Art" className="w-full flex-1 object-contain rounded-2xl shadow-inner bg-gray-50" />
                  <button 
                    onClick={handleDownload}
                    className="mt-4 flex items-center gap-2 px-6 py-3 bg-pink-100 text-pink-600 font-bold rounded-full hover:bg-pink-200 transition-colors w-full justify-center md:w-auto shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    画像を保存する
                  </button>
                </div>
            )}
            
            {loading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
                     <div className="flex flex-col items-center">
                        <div className="w-10 h-10 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin mb-2"></div>
                        <p className="text-xs text-pink-500 font-bold">Painting...</p>
                     </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
)

export default AiArt;