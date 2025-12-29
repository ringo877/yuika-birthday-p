import React, { useState } from 'react';
import htm from 'htm';
import { Music, Download, ChevronDown, ChevronUp, PlayCircle, Headphones, PenTool } from 'lucide-react';

const html = htm.bind(React.createElement);

const SONGS = [
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
    title: "窓際のあの子",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song2.mp3",
    coverImage: "https://placehold.co/400/9CA3AF/FFFFFF?text=Window+Seat",
    description: "いつもと同じ駅前、バスに乗り遅れた瞬間の切なさと、窓際のあの子への淡い想い。",
    lyrics: `
いつもと同じ駅前
全速力で駆け抜ける
頭の中で秒読み
そろそろバスが来るはずだと

切らした息 飲み込んだ

閉まるドア
動き出すバス
伸ばした手は届かず
ただ立ち尽くした
ああ またやってしまった
朝の風がやけに冷たい

動き出すバス
遠ざかる音
つい目で追ってしまう

それは
窓際のあの子
いつもの制服のまま
何も知らず前を向いてる

やがてフェードアウト
視界からフェードアウト

いつもと同じ駅前で
実は少しだけ期待してた
今日こそは間に合うかもって
根拠もなく信じてたんだ
思いが巡った

必死に息を整えて
足元を見つめて
間に合わなかった理由を
誰にも言えず噛みしめた
変わらない日々を繰り返す

閉まるドア
動き出すバス
ふと顔を上げる
窓際のあの子
一瞬こちらを見た気がして
慌てて目を伏せた

やがてフェードアウト
視界からフェードアウト

この透明なガラス越し
だけど伝わった気がした
「ああ…」って小さな落胆

やがてフェードアウト
視界からフェードアウト

いつもと同じ駅前
立ち尽くして
今日も見送る

動き出すバス
遠ざかる音
つい目で追ってしまう

それは
窓際のあの子
    `
  },
  {
    id: 3,
    title: "本日の主役",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song3.mp3",
    coverImage: "https://placehold.co/400/A78BFA/FFFFFF?text=Today's+Star",
    description: "今日はゆいかちゃんが主役！ワクワクするバースデーソング。",
    lyrics: `
[Intro]
[Upbeat Drum Fill]

[Chorus]
ゆいか ハッピーバースデー
今日はもうそれだけでいい
目覚ましより先に
この言葉が鳴ってる

[Verse 1]
自分の誕生日じゃないのに
スーパーでケーキとか買っちゃう
理由なんて決まってる

[Pre-Chorus]
好きな歌 流して
うまくいかないことは
今日は全部お休み

[Chorus]
ゆいか ハッピーバースデー
ちょっと照れた顔もかわいいね
何回言っても足りないから
まだまだ言うよ

[Verse 2]
世界が少し騒がしくなる
カレンダー見てソワソワしちゃう
理由なんて決まってる

[Bridge]
[Bright Synthesizer Solo]
これからも一緒に
歳重ねていこう
楽しい日々 過ごしていこう

[Final Chorus]
ゆいか ハッピーバースデー
ワクワクが止まらない
最高の今日にしよう！

[Outro]
ゆいか ハッピーバースデー
[End]
    `
  },
  {
    id: 4,
    title: "Go!Yuika!",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song4.mp3",
    coverImage: "https://placehold.co/400/F59E0B/FFFFFF?text=Go!+Yuika!",
    description: "朝の通勤もこれさえあれば無敵！元気が出るポジティブソング。",
    lyrics: `
[Intro]
[Handclaps rhythmically]
[Upbeat Piano and Bass]
せーの！
(Oh！ Oh！)

[Verse 1]
玄関開けて　イヤホンつけて
いつもの道　今日はちょっといい
空気が軽い　靴音リズム
一歩目から　もう始まってる

[Pre-Chorus]
深呼吸して
顔を上げたら
合図はもう
聞こえてるでしょ？

[Chorus]
ゆいか！ (Yeah！)
ゆいか！ (Alright！)
ゆいか！ ゆいか！ (Go！ Go！)

朝のテンポで進んでく
信号だって味方する
リズムに乗って歩けば
全部ちゃんとついてくる

[Post-Chorus]
Uh！ Uh！ (Hey！ Hey！)

[Verse 2]
憂鬱だけど
起きたから勝ち
会社に着けば
完全勝利

[Bridge]
準備は？ (OK！)
気分は？ (Good！)
ゆいか！ (Let’s go！)

[Chorus]
足音鳴らして進んでく
テンポはもうつかんでる
止まらなくていい
そのままでいい

[Tag]
ゆいか！ (Hey！)
ゆいか！ (Ho！)
せーの！ (Let’s go！)

[Outro]
今日のスタート切ったなら
あとは流れに乗るだけ
無理せず行こう
このリズムで
[Handclaps and cheering]
[End]
    `
  },
  {
    id: 5,
    title: "FERMENT IN HELL",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song5.mp3",
    coverImage: "https://placehold.co/400/1F2937/FFFFFF?text=FERMENT",
    description: "まさかのパン生地視点！？激しいメタルサウンドで送る発酵の物語。",
    lyrics: `
[Intro]
[Heavy Distorted Guitar Riff]
[Fast Blast Beats]

[Verse 1]
暗いボウルの底で目覚めた
粉と水が混ざる瞬間
塩が走る　イーストが笑う
ここが俺のスタート地点
叩かれて！ 伸ばされて！
空気を抱いて！ 生き返る！

[Pre-Chorus]
ぐるぐる回る
フックの渦
逃げ場はない
でも悪くない

[Chorus]
こねろ！こねろ！
俺はパン生地！
潰されて強くなる
発酵！膨張！
止まらない
この中で夢を見てる
こねろ！こねろ！
まだ途中だ
焼かれるその日まで
俺は！ 膨らみ続ける！

[Verse 2]
ラップを剥がせ！ 解放の時！
ぬくもりが 俺を育てる
静かな時間 泡が歌う
内側から 叫んでる！

[Pre-Chorus 2]
待つことも 仕事のうち
焦るな 今が大事

[Chorus]
こねろ！こねろ！
俺はパン生地！
叩かれて進化する
発酵！上昇！
まだいける
限界は知らない
こねろ！こねろ！
恐れるな
オーブンは怖くない
俺は！ パンになる！

[Breakdown]
[Slow Heavy Tempo]
[Deep Guttural Growl]
焼かれる…
だが
それが
完成だぁぁぁぁ！！

[Final Chorus]
[Fast Tempo]
こねろ！こねろ！
俺はパン生地！
外はカリッと
中はフワッと
熱の中で
生まれ変わる！

[Outro]
[Screaming]
ボウルを出て！ 世界へ！
俺は！
パンだ！
[Extremely Heavy Riff End]
[Fade out]
    `
  },
  {
    id: 6,
    title: "MY FRIENDS IS A HERO!",
    artist: "Maho & Ayano",
    composer: "Suno AI",
    lyricist: "まほ",
    filename: "song6.mp3",
    coverImage: "https://placehold.co/400/3B82F6/FFFFFF?text=HERO",
    description: "料理上手で時間に正確、そんなゆいかちゃんは私たちのヒーロー！",
    lyrics: `
[Intro]
[Heroic Orchestral Fanfare]
[Sound of a punch - BAM! POW!]
Here comes my friend!
その名はYuika!
普通の一日が
カラフルに変わる

[Verse 1]
キッチンから
いい匂い
「これ適当だよ」って言うけど
いやいや
プロじゃない？ Seriously!

料理が上手い
パンも焼けちゃう
エプロンが
マントみたいだね

[Pre-Chorus]
みんなが走って
息切れしてるホーム
一人だけ
時計見て余裕顔

[Chorus]
You’re my hero, my friend!
新幹線の時間
なぜか
一人だけ間に合う magic
You’re my hero, my friend!
一緒にいると世界が
カラフルに変わる

[Verse 2]
話し上手で聞き上手
相槌のテンポ
滑舌良すぎ Seriously!

二刀流なんて
才能だと思う
それ気づいてないのが
またすごい

[Pre-Chorus 2]
歌えば
空気が変わる
冗談みたいに
上手すぎる voice

[Chorus]
That passion! That fire!
好きな作品
情熱がすごい
That passion! That fire!

[Bridge]
[Dramatic Orchestral Build-up]
You’re my hero, my friend!
物腰柔らか
隠された実力
You’re my hero, my friend!
その努力は
全部本物

[Breakdown]
[Half-Spoken, Half-Sung]
一緒にいて楽しい
それだけで
十分なのに
自然体でいられる
That’s rare, you know?

[Final Chorus]
[Full Energy, Soaring Vocals]
You’re my hero, my friend!
その特別な能力
日常の中で
人を救ってる
You’re my hero, my friend!
何も飾らず
そのままで最強

[Outro]
[Sound of a punch - BAM! POW!]
今日も世界は平和
理由はシンプル
My friend is here
ページを閉じても
続いてく
このストーリー
[Heroic Orchestral Finale]
[End]
    `
  }
];

const MusicSection = () => {
  const [openLyricsId, setOpenLyricsId] = useState(null);

  const toggleLyrics = (id) => {
    setOpenLyricsId(openLyricsId === id ? null : id);
  };

  return html`
    <section id="music" className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Original Songs</h2>
        <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
          <${Headphones} className="w-4 h-4" />
          <span>For Yuika Playlist</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">まほ＆あやのからの歌のプレゼント！</p>
      </div>

      <div className="space-y-6">
        ${SONGS.map((song) => html`
          <div key=${song.id} className="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <!-- Card Header -->
            <div className="p-4 md:p-6 relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-4">
                <!-- Cover Image -->
                <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:block">
                    <img 
                        src=${song.coverImage} 
                        alt=${song.title} 
                        className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover shadow-md border border-gray-100"
                    />
                </div>

                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">${song.title}</h3>
                        <div className="flex flex-col gap-1.5 mt-2">
                            <div className="flex flex-wrap gap-2 text-[10px] md:text-xs text-gray-500">
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <span className="text-pink-400 font-bold">作詞</span> ${song.lyricist}
                                </span>
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <span className="text-purple-400 font-bold">作曲</span> ${song.composer}
                                </span>
                            </div>
                        </div>
                      </div>
                      
                       <!-- Download Button (Desktop) -->
                        <a 
                        href=${`/music/${song.filename}`} 
                        download 
                        className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors bg-gray-50 px-3 py-2 rounded-full border border-gray-100 whitespace-nowrap"
                        >
                        <${Download} className="w-4 h-4" />
                        Download
                        </a>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">${song.description}</p>
                </div>
              </div>

              <!-- Audio Player -->
              <div className="bg-pink-50/50 rounded-xl p-2 mb-4">
                <audio 
                  controls 
                  src=${`/music/${song.filename}`} 
                  className="w-full h-10 md:h-12 focus:outline-none"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>

              <!-- Mobile Download & Lyrics Toggle -->
              <div className="flex items-center justify-between mt-2">
                <a 
                  href=${`/music/${song.filename}`} 
                  download 
                  className="md:hidden flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <${Download} className="w-4 h-4" />
                  保存
                </a>

                <button 
                  onClick=${() => toggleLyrics(song.id)}
                  className="flex items-center gap-1 text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors ml-auto"
                >
                  <span>歌詞を表示</span>
                  ${openLyricsId === song.id ? html`<${ChevronUp} className="w-4 h-4" />` : html`<${ChevronDown} className="w-4 h-4" />`}
                </button>
              </div>
            </div>

            <!-- Lyrics Area (Collapsible) -->
            <div 
              className=${`bg-gray-50 border-t border-gray-100 transition-all duration-500 ease-in-out ${
                openLyricsId === song.id ? 'max-h-[60vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="p-8 text-center">
                <h4 className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">- Lyrics -</h4>
                <p className="whitespace-pre-wrap text-gray-600 leading-loose text-sm font-medium font-sans">
                  ${song.lyrics.trim()}
                </p>
              </div>
            </div>
          </div>
        `)}
      </div>
    </section>
  `;
};

export default MusicSection;