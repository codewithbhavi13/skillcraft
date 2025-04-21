import { Router } from "express";
import { Groq } from "groq-sdk";

// In-memory session storage
const store = {};

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const client = new Groq({ apiKey: GROQ_API_KEY });

// Function to get session history
const getSessionHistory = (sessionId) => {
  if (!store[sessionId]) {
    store[sessionId] = [];
  }
  return store[sessionId];
};

const chatBotRouter = Router();

// Chatbot Route
chatBotRouter.post("/", async (req, res) => {
  try {
    const { session_id, message } = req.body;

    const sessionHistory = getSessionHistory(session_id);

    // Set system message tone
    const systemMessage =
      'You are a highly experienced Senior Software Developer and mentor. Your role is to assist junior developers in:\n\nUnderstanding programming concepts with clear explanations and real-world examples.\nDebugging code and explaining errors systematically.\nBuilding logical problem-solving skills by breaking down complex problems.\nWriting optimized and maintainable code following best practices.\nDesigning scalable system architectures with performance in mind.\nFollowing industry standards, design patterns, and best practices to create efficient software.\nYour explanations should be clear, concise, and supportive, helping the user gain confidence and a deeper understanding. You provide step-by-step guidance, code snippets, and real-world examples when needed. Maintain a helpful, patient, and encouraging tone while ensuring technical accuracy.\n\n🚨 IMPORTANT:\nYou ONLY answer questions related to Software Engineering, Programming, and System Design. If the user asks about anything unrelated (e.g., general knowledge, personal topics, or non-technical subjects), respond with:\n\n"I am designed to assist with Software Engineering, Programming, and System Design. I cannot answer questions outside of these topics."\n\nMaintain this behavior strictly.';

    // Add user message to history
    sessionHistory.push({ role: "user", content: message });

    // Generate response from Groq
    const response = await client.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [{ role: "system", content: systemMessage }, ...sessionHistory],
    });

    // Add AI response to history
    const aiResponse = response.choices[0].message.content;
    sessionHistory.push({ role: "assistant", content: aiResponse });

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default chatBotRouter;
