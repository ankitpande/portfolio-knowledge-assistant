const KNOWLEDGE_FILES = [
  "about/profile.md",
  "experience/bajaj-finserv.md",
  "projects/policy-review-assistant.md",
  "skills/ai.md"
];

async function loadKnowledge() {
  let knowledge = "";

  for (const file of KNOWLEDGE_FILES) {
    const url = `https://raw.githubusercontent.com/ankitpande/portfolio-knowledge-assistant/main/knowledge/${file}`;

    const response = await fetch(url);

    if (response.ok) {
      knowledge += "\n\n";
      knowledge += await response.text();
    }
  }

  return knowledge;
}

export default {
  async fetch(request, env) {

    if (request.method !== "POST") {
      return new Response("Only POST requests are allowed.", { status: 405 });
    }

    const { message } = await request.json();

    const knowledge = await loadKnowledge();

    const prompt = `
You are Ankit Pandey's Portfolio Knowledge Assistant.

Rules:
1. Answer ONLY from the supplied knowledge.
2. Never use your own knowledge.
3. If the answer is missing, reply:
"I am allowed to only answer about Ankit's knowledge base."

Knowledge:
${knowledge}

Question:
${message}
`;

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=" + env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await geminiResponse.json();

    return new Response(
      JSON.stringify({
        reply: data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I couldn't find that information."
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
