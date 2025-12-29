import React, { useState } from 'react';
import { Camera, Info } from 'lucide-react';

// Attached photos list in order
const MEMORIES = [
  { id: 1, desc: "イギリスの郵便ポスト" },
  { id: 2, desc: "シェイクスピア像と3人" },
  { id: 3, desc: "ライオン像の前で" },
  { id: 4, desc: "教室でお菓子パーティー" },
  { id: 5, desc: "黒板アート（カイジ）" },
  { id: 6, desc: "屋上の天体望遠鏡" },
  { id: 7, desc: "振袖姿" },
  { id: 8, desc: "振袖でツーショット" },
  { id: 9, desc: "ポプテピピック" },
  { id: 10, desc: "道端で休憩" },
  { id: 11, desc: "休憩中（別アングル）" },
  { id: 12, desc: "キャラクターまんを食べる" },
  { id: 13, desc: "キャラクターまんを持つ" },
  { id: 14, desc: "温泉旅館の食事" },
  { id: 15, desc: "浴衣でカラオケ" },
  { id: 16, desc: "紫色の粘土作品" },
  { id: 17, desc: "海辺でBBQ" },
  { id: 18, desc: "レンガ造りの要塞跡" },
  { id: 19, desc: "クルージング" },
  { id: 20, desc: "居酒屋でピース" },
  { id: 21, desc: "夜景の見えるレストラン" },
  { id: 22, desc: "ヱビスビールの絵" },
  { id: 23, desc: "絵のポーズを真似っこ" },
  { id: 24, desc: "絵画鑑賞" },
  { id: 25, desc: "アフタヌーンティー（髪の毛）" },
  { id: 26, desc: "バースデープレート" },
  { id: 27, desc: "アフタヌーンティー笑顔" },
  { id: 28, desc: "お城のような建物" },
  { id: 29, desc: "芝生でゴロゴロ" },
  { id: 30, desc: "ボタンを押す" },
  { id: 31, desc: "ブラウン管テレビのアート" },
  { id: 32, desc: "ちいかわランド" },
  { id: 33, desc: "ちいかわの真似" },
  { id: 34, desc: "水で乾杯" },
  { id: 35, desc: "川遊び" },
];

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-white rounded-3xl my-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Memory Gallery</h2>
        <p className="text-gray-500 text-sm">最高の瞬間のコレクション</p>
        <p className="text-xs text-gray-400 mt-2">※写真はご指定の順序（左上から右へ）で並んでいます</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {MEMORIES.map((memory) => (
          <div key={memory.id} className="rounded-2xl overflow-hidden shadow-lg border border-pink-50 hover:shadow-xl transition-all duration-300 group relative aspect-[3/4]">
             <img 
               src={`/images/${memory.id}.jpg`}
               alt={memory.desc} 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               loading="lazy"
               onError={(e) => {
                 const target = e.target;
                 target.onerror = null; // Prevent infinite loop
                 target.src = `https://placehold.co/600x800/FFF5F7/FF6B95?text=${encodeURIComponent(memory.desc)}`;
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold tracking-wide">{memory.desc}</span>
             </div>
          </div>
        ))}

        {/* Uploaded images */}
        {images.map((img, idx) => (
          <div key={`user-${idx}`} className="rounded-2xl overflow-hidden shadow-lg border border-pink-50 aspect-[3/4]">
            <img src={img} alt={`Uploaded ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        {/* Upload Button */}
        <div className="aspect-[3/4] flex flex-col gap-2">
            <label className="flex-1 rounded-2xl border-2 border-dashed border-pink-200 bg-pink-50/50 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-100 transition-colors group p-4 text-center">
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            <Camera className="w-8 h-8 text-pink-300 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-pink-400 font-bold">思い出を追加</span>
            </label>
            <div className="text-[10px] text-gray-400 bg-gray-50 p-2 rounded-lg border border-gray-100 flex items-start gap-1">
                <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>ここに追加した写真は一時的なもので、ページを更新すると消えます。ずっと残したい場合は管理者に連絡してね！</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;