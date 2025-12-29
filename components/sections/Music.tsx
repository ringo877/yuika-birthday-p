import React, { useState } from 'react';
import { Music, Mic2, Download, ChevronDown, ChevronUp, PlayCircle, Headphones, PenTool } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  composer: string;
  lyricist: string;
  filename: string; // Filename in the /music/ folder
  coverImage: string;
  lyrics: string;
  description: string;
}

// TODO: Replace with your actual song files, lyrics, and cover images
const SONGS: Song[] = [
  {
    id: 1,
    title: "ユイカ",
    artist: "Suno AI",
    composer: "Suno AI",
    lyricist: "Suno prompted by あやの",
    filename: "song1.mp3",
    coverImage: "https://placehold.co/400/FF6B95/FFFFFF?text=Yuika",
    description: "あやのがSuno AIにプロンプトを入力して生成した、ユイカちゃん讃歌！",
    lyrics: `
[ギターリフ]

[Verse]
最高にナイスなやつさ
オシャレで可愛いのさ
宇宙の誰より素敵
心も綺麗なユイカ
彼女のその笑顔は
幸せを呼ぶのさ
彼女のその言葉は
安心をくれるのさ
愛しい私の親友
この世で一番の親友

[Pre-Chorus]
そんな彼女の
誕生日
最高の一日にしよう
みんな
一緒にお祝いしよう

[Chorus]
誕生日おめでとうユイカ
世界中で
誰よりも
素敵な人さ
神様が
一人選ぶなら
彼女のことさ
ユイカ
誕生日おめでとうユイカ
誰よりも
最高の親友
神様が
一人選ぶなら
彼女のことさ
ユイカ

[Interlude]
ナナナナナナナ
ナナナナナナナ
ナナナナナナナ
ユイカ
ナナナナナナナ
ナナナナナナナ
ナナナナナナナ
ユイカ

[Verse 2]
最高にナイスなやつさ
センスも最高なのさ
正直者で面白い
知性の高いユイカ
彼女がいるだけで
すべてがうまくいく
彼女がいればいつも
楽しい気分になる
愛しい私の親友
この世で一番の親友

[Pre-Chorus]
そんな彼女の
誕生日
最高の一日にしよう
みんな
一緒にお祝いしよう

[Chorus]
誕生日おめでとうユイカ
世界中で
誰よりも
素敵な人さ
神様が
一人選ぶなら
彼女のことさ
ユイカ
誕生日おめでとうユイカ
誰よりも
最高の親友
神様が
一人選ぶなら
彼女のことさ
ユイカ

[Bridge]
誕生日おめでとうユイカ
世界中で
誰よりも
素敵な人さ
神様が
一人選ぶなら
彼女のことさ
ユイカ
誕生日おめでとうユイカ
誰よりも
最高の親友
神様が
一人選ぶなら
彼女のことさ
ユイカ
    `
  },
  {
    id: 2,
    title: "Bestie Forever",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song2.mp3",
    coverImage: "https://placehold.co/400/A78BFA/FFFFFF?text=Bestie+Forever",
    description: "日頃の感謝を込めて。友情は永遠！",
    lyrics: `
(Verse)
教室の隅で話した夢
今も変わらずここにある
大人になっても変わらない
私たちの距離感

(Chorus)
Bestie Forever
どこにいても 心は繋がってる
ゆいか まほ あやの
最強のトリオだね

(Bridge)
喧嘩した日もあったけど
それも今では笑い話
これからもよろしくね

(Chorus)
Bestie Forever...
    `
  },
  {
    id: 3,
    title: "放課後ティータイム",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "あやの",
    filename: "song3.mp3",
    coverImage: "https://placehold.co/400/FBBF24/FFFFFF?text=Tea+Time",
    description: "あの日の放課後、いつものカフェで語り合った時間を曲にしました。",
    lyrics: `
(Verse 1)
チャイムが鳴れば 合図だね
いつもの席で 待ち合わせ
テストの点数 恋の話
尽きない話題 ドーナツ片手に

(Chorus)
放課後ティータイム
夕日が差し込む 窓際で
時間が止まればいいのにな
君といると 素直になれる

(Verse 2)
大人ぶって ブラックコーヒー
やっぱり苦くて 笑い合う
そんな何気ない 瞬間が
宝物だと 気づいたよ

(Outro)
また明日ね 手を振って
帰り道も ずっと笑顔
    `
  },
  {
    id: 4,
    title: "Dreamer",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song4.mp3",
    coverImage: "https://placehold.co/400/60A5FA/FFFFFF?text=Dreamer",
    description: "それぞれの夢に向かって頑張るゆいかちゃんへの応援歌。",
    lyrics: `
(Verse 1)
誰も知らない 道を行く
君の背中は 輝いてる
躓いたって 立ち上がる
その強さに 憧れてた

(Chorus)
Fly High, Dreamer
君ならできる 信じてる
どんな高い 壁だって
きっと越えられるはずさ

(Bridge)
一人じゃないよ 振り返れば
私たちが いつもいる
エールを送るよ 全力で

(Chorus)
Fly High, Dreamer
大空高く 羽ばたいて
君の描く 未来地図
一緒に見に行こう
    `
  },
  {
    id: 5,
    title: "真夜中の電話",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "あやの",
    filename: "song5.mp3",
    coverImage: "https://placehold.co/400/1F2937/FFFFFF?text=Midnight+Call",
    description: "眠れない夜に長電話した時のこと。辛い時こそ頼ってね。",
    lyrics: `
(Verse 1)
時計の針は てっぺん回る
スマホが光る 君の名前
「ごめんね、起きてる？」
震える声が 聞こえたよ

(Chorus)
真夜中の電話
涙が枯れるまで 話そう
言葉にならなくていい
ただ繋がってるだけでいい

(Verse 2)
朝が来るまで 寄り添うよ
電波越しの 温もりで
大丈夫 明日はきっと
少しだけ 笑えるはず

(Outro)
おやすみ また明日
いい夢を見てね
    `
  },
  {
    id: 6,
    title: "これから",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song6.mp3",
    coverImage: "https://placehold.co/400/34D399/FFFFFF?text=Future",
    description: "これからの未来も、おばあちゃんになっても仲良しでいようね。",
    lyrics: `
(Verse 1)
アルバムのページ 増えていく
シワの数も 増えていくかな
でも変わらない ものがある
この絆は 色褪せない

(Chorus)
これから先も 何十年
一緒にお祝い しようね
おばあちゃんになっても
派手な服着て 街歩こう

(Verse 2)
杖をついても 手を繋ぎ
美味しいもの 食べに行こう
思い出話に 花咲かせ
ゲラゲラ笑う 私たち

(Outro)
約束だよ ずっと
Friends Forever
大好きだよ ゆいか
    `
  }
];

const MusicSection: React.FC = () => {
  const [openLyricsId, setOpenLyricsId] = useState<number | null>(null);

  const toggleLyrics = (id: number) => {
    setOpenLyricsId(openLyricsId === id ? null : id);
  };

  return (
    <section id="music" className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Original Songs</h2>
        <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
          <Headphones className="w-4 h-4" />
          <span>For Yuika Playlist</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">まほ＆あやのからの歌のプレゼント！</p>
      </div>

      <div className="space-y-6">
        {SONGS.map((song) => (
          <div key={song.id} className="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="p-4 md:p-6 relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-4">
                {/* Cover Image */}
                <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:block">
                    <img 
                        src={song.coverImage} 
                        alt={song.title} 
                        className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover shadow-md border border-gray-100"
                    />
                </div>

                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{song.title}</h3>
                        <div className="flex flex-col gap-1.5 mt-2">
                            <p className="text-sm text-pink-500 font-bold flex items-center gap-1">
                                <Mic2 className="w-3 h-3" />
                                {song.artist}
                            </p>
                            <div className="flex flex-wrap gap-2 text-[10px] md:text-xs text-gray-500">
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <span className="text-pink-400 font-bold">作詞</span> {song.lyricist}
                                </span>
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <span className="text-purple-400 font-bold">作曲</span> {song.composer}
                                </span>
                            </div>
                        </div>
                      </div>
                      
                       {/* Download Button (Desktop) */}
                        <a 
                        href={`/music/${song.filename}`} 
                        download 
                        className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors bg-gray-50 px-3 py-2 rounded-full border border-gray-100 whitespace-nowrap"
                        >
                        <Download className="w-4 h-4" />
                        Download
                        </a>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{song.description}</p>
                </div>
              </div>

              {/* Audio Player */}
              <div className="bg-pink-50/50 rounded-xl p-2 mb-4">
                <audio 
                  controls 
                  src={`/music/${song.filename}`} 
                  className="w-full h-10 md:h-12 focus:outline-none"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Mobile Download & Lyrics Toggle */}
              <div className="flex items-center justify-between mt-2">
                <a 
                  href={`/music/${song.filename}`} 
                  download 
                  className="md:hidden flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  保存
                </a>

                <button 
                  onClick={() => toggleLyrics(song.id)}
                  className="flex items-center gap-1 text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors ml-auto"
                >
                  <span>歌詞を表示</span>
                  {openLyricsId === song.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Lyrics Area (Collapsible) */}
            <div 
              className={`bg-gray-50 border-t border-gray-100 transition-all duration-500 ease-in-out ${
                openLyricsId === song.id ? 'max-h-[60vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="p-8 text-center">
                <h4 className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">- Lyrics -</h4>
                <p className="whitespace-pre-wrap text-gray-600 leading-loose text-sm font-medium font-sans">
                  {song.lyrics.trim()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;