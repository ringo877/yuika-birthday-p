import React from 'react';
import { Heart, MessageCircleHeart } from 'lucide-react';

const MessageBoard = () => {
  return (
    <section id="board" className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-yuika-pink mb-3">Messages</h2>
        <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
          <MessageCircleHeart className="w-4 h-4" />
          <span>Friends Forever</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Maho's Message */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-pink-100 relative group transform transition-all hover:-translate-y-1 hover:shadow-xl">
           <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-pink-100 text-pink-500 p-2 md:p-3 rounded-full shadow-sm">
             <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
           </div>
           <div className="mb-4 md:mb-6 flex justify-between items-center border-b border-pink-50 pb-3">
             <span className="font-bold text-lg md:text-xl text-gray-800">まほ</span>
             <span className="text-xs font-bold text-pink-300 bg-pink-50 px-2 py-1 rounded-full">Bestie</span>
           </div>
           <p className="text-gray-600 leading-loose whitespace-pre-wrap font-medium text-sm md:text-base">
{`ゆいか お誕生日おめでとう🎂
写真を見返しながら、中学の時から本当に長い時間を一緒に過ごしてきたなあとしみじみしているよ。これからもよろしくね。いつも本当にありがとう！`}
           </p>
        </div>

        {/* Ayano's Message */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-purple-100 relative group transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-purple-100 text-purple-500 p-2 md:p-3 rounded-full shadow-sm">
             <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
           </div>
           <div className="mb-4 md:mb-6 flex justify-between items-center border-b border-purple-50 pb-3">
             <span className="font-bold text-lg md:text-xl text-gray-800">あやの</span>
             <span className="text-xs font-bold text-purple-300 bg-purple-50 px-2 py-1 rounded-full">Friend</span>
           </div>
           <p className="text-gray-600 leading-loose whitespace-pre-wrap font-medium text-sm md:text-base">
{`ゆいかちゃんへ
お誕生日おめでとう！
ゆいかちゃんは私にとっての女神です！
一緒に出掛けたり、悩みを聞いてくれたり、漫画やアニメの話をしたり……。
ゆいかちゃんといると、心の底から楽しくて、気持ちが救われます。いつもありがとう！
これからもよろしくね！`}
           </p>
        </div>
      </div>
    </section>
  );
};

export default MessageBoard;