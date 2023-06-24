// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chatForm');
    const userMessageInput = document.getElementById('userMessage');
    const chatOutputDiv = document.getElementById('chatOutput');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent form submission
  
      const userMessage = userMessageInput.value;
  
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model : 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: userMessage },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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', // Replace with your actual API key
            },
          }
        );
  
        const reply = response.data.choices[0].message.content;
        chatOutputDiv.innerHTML = reply;
      } catch (error) {
        console.error(error);
        chatOutputDiv.innerHTML = 'An error occurred';
      }
    });
  });
  
