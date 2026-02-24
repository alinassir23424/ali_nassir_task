const API_URL =
  "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english";

const API_KEY = "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";

export async function analyzeStory(text) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        model: "distilbert-base-uncased-finetuned-sst-2-english", 
        inputs: text 
      }),
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (data.error) {
      console.log("Model not ready yet:", data.error);
      return "Model is loading, try again in a few seconds ⏳";
    }

    return data;
  } catch (error) {
    console.log("API Error:", error);
    return null;
  }
}
