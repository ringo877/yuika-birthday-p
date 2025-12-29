import { GoogleGenAI } from "@google/genai";

// Ensure API key is present
const apiKey = process.env.API_KEY || '';
if (!apiKey) {
  console.warn("API_KEY is missing from environment variables.");
}

const ai = new GoogleGenAI({ apiKey });

export const getFortune = async (userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `You are a cheerful and mystical fortune teller for a birthday girl named "ゆいか" (Yuika).
      Based on the following input about her recent interests or situation, predict her fortune for the coming year.
      Keep it positive, encouraging, and magical. Output in Japanese.
      IMPORTANT: When addressing her by name, ALWAYS use "ゆいかちゃん" (Hiragana). Do not use Kanji or Katakana for her name.
      Input: ${userInput}`,
    });
    return response.text || "占いの結果が見えませんでした...もう一度試してみてね！";
  } catch (error) {
    console.error("Fortune Error:", error);
    return "星の巡りが悪くて通信エラーが起きました...少し待ってね。";
  }
};

export const getShortStory = async (genre: string, keywords: string): Promise<string> => {
  try {
    const prompt = `
親友の「ゆいか」が主人公として活躍する短編小説を書いてください。

【重要：登場人物と呼び方のルール】
以下の呼び方を厳守して会話を描写してください。
★3人の一人称は全員「私」で統一してください。

1. ゆいか（主人公）
- 一人称：「私」
- まほへの呼び方：「まほちゃん」
- あやのへの呼び方：「あやのん」

2. まほ（親友）
- 一人称：「私」
- ゆいかへの呼び方：「ゆいか」
- あやのへの呼び方：「あやのん」

3. あやの（親友）
- 一人称：「私」
- ゆいかへの呼び方：「ゆいかちゃん」
- まほへの呼び方：「まほ」

※この3人はいつも一緒の仲良し3人組です。必ず3人を登場させてください。

ジャンル：${genre}
キーワード・テーマ：${keywords}

条件：
- 文字数は800～1200文字程度。
- 物語の中に「誕生日」や「お祝い」の要素を自然に盛り込んでください（結末や重要な鍵として）。
- 読んだ本人が嬉しくなるような、ポジティブでワクワクする展開。
- 3人の仲の良さが伝わる会話や掛け合いを盛り込んでください。
- タイトルを一番最初に【】で囲って出力してください。
- 日本語で出力してください。
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 2000 }
      }
    });
    return response.text || "物語が白紙に戻ってしまいました...";
  } catch (error) {
    console.error("Story Error:", error);
    return "インクが切れてしまいました...もう一度試してみてね。";
  }
};

export const generateBirthdayImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Generate a cute, festive, artistic illustration for a birthday celebration.
            IMPORTANT: The image must feature exactly 3 girls together: Yuika, Maho, and Ayano.
            Style: Digital art, colorful, happy.
            Specifics: ${prompt}`,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};