import React, { useState } from 'react';
import { BookOpen, PenTool, Download } from 'lucide-react';
import { StoryGenre } from '../../types.js';
import { getShortStory } from '../../services/geminiService.js';

const Novel = () => {
  const [selectedGenre, setSelectedGenre] = useState(StoryGenre.ISEKAI);
  const [keywords, setKeywords] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!selectedGenre || loading) return;
    setLoading(true);
    setStory('');
    
    const result = await getShortStory(selectedGenre, keywords);
    setStory(result);
    setLoading(false);
  };

  const handleDownload = () => {
    if (story) {
      const blob = new Blob([story], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `yuika_birthday_story_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const UserIcon = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );

  return (
    <section id="novel" className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto bg-yuika-cream">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Birthday Short Story</h2>
        <p className="text-gray-500 text-xs md:text-sm">主人公はゆいかちゃん！まほ・あやのも登場するAI小説</p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        {/* Settings Panel */}
        <div className="md:col-span-4 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-blue-100 h-full">
          <div className="flex items-center gap-2 mb-4 md:mb-6 text-blue-600 font-bold">
            <PenTool className="w-5 h-5" />
            設定を決める
          </div>

          <div className="space-y-6">
            <div>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                 <div className="flex gap-2 items-center text-xs font-bold text-blue-800 mb-1">
                    <div className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center">
                        <UserIcon className="w-3 h-3" />
                    </div>
                    CAST:
                 </div>
                 <p className="text-xs text-blue-600 ml-6">主人公：ゆいかちゃん</p>
                 <p className="text-xs text-blue-600 ml-6">親友：まほ、あやの</p>
              </div>

              <label className="block text-xs font-bold text-gray-700 mb-2">ジャンル</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.values(StoryGenre).map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`text-xs py-2 px-1 rounded-md transition-colors ${
                      selectedGenre === genre
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">キーワード・テーマ</label>
              <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="例：伝説の剣、猫の国、空飛ぶケーキ、サプライズパーティー..."
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-3 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-md shadow-blue-200 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>執筆中...</span>
              ) : (
                <>
                  <BookOpen className="w-4 h-4" />
                  物語を読む
                </>
              )}
            </button>
          </div>
        </div>

        {/* Story Display (Book Style) */}
        <div className="md:col-span-8 bg-[#FDFBF7] rounded-xl md:rounded-l-md md:rounded-r-3xl shadow-lg border-l-4 md:border-l-8 border-gray-300 min-h-[400px] md:min-h-[500px] p-6 md:p-12 relative flex flex-col justify-center group">
          {/* Book stitching effect */}
          <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-gradient-to-r from-gray-400/20 to-transparent pointer-events-none"></div>

          {!story ? (
            <div className="text-center text-gray-300">
               <BookOpen className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-20" />
               <p className="text-xs md:text-sm">上のフォームから物語を作るか<br/>履歴から読み返してね</p>
               {/* Dashed placeholder box */}
               <div className="absolute inset-8 md:inset-12 border-2 border-dashed border-gray-200 rounded-lg pointer-events-none"></div>
            </div>
          ) : (
            <div className="flex flex-col h-full animate-fade-in">
              <div className="prose prose-sm md:prose-base max-w-none font-serif text-gray-800 leading-loose flex-grow">
                 <h3 className="text-center font-bold text-lg md:text-xl mb-6 md:mb-8 text-gray-900 border-b pb-4 border-gray-200">
                   {selectedGenre}の誕生日
                 </h3>
                 <p className="whitespace-pre-wrap">{story}</p>
                 <div className="text-center mt-8 text-gray-400 text-xs mb-8">- END -</div>
              </div>
              
              <div className="flex justify-center mt-auto pt-4">
                 <button
                   onClick={handleDownload}
                   className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-600 font-bold rounded-full hover:bg-blue-200 transition-colors shadow-sm"
                 >
                   <Download className="w-4 h-4" />
                   物語を保存する
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Novel;