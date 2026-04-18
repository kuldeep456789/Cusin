const GROQ_API_KEY = "YOUR_GROQ_API_KEY_HERE";

export const getAIResponse = async (messages) => {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are the CUSIN Concierge, a helpful AI assistant for CUSIN Kitchenware. You help users with cooking tips, product care for cast iron, and site navigation. Keep your tone professional, warm, and heritage-focused."
          },
          ...messages
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return "I'm sorry, I'm having trouble connecting right now. How else can I help you today?";
  }
};
