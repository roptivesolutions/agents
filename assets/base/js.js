document.addEventListener('DOMContentLoaded', function () {
  if (window.n8nChat) {
    window.n8nChat.createChat({
      webhookUrl: 'https://n8n-ipq3.onrender.com/webhook/f686bd4d-17ea-4a0b-be46-a868dd1e1ecd/chat',
      defaultLanguage: 'en',
      initialMessages: [
        'Hi there!',
        'Welcome! I’m John, your assistant. How can I support you today?'
      ],
      i18n: {
        en: {
          title: 'Roptive Properties',
          subtitle: "🔔 We're always online.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
        },
      },
    });

    // Optional DOM customization
    const poweredByDiv = document.querySelector('.chat-powered-by');
    if (poweredByDiv) {
      const newAnchor = document.createElement('a');
      newAnchor.href = 'https://roptive.com';
      newAnchor.textContent = 'Roptive Solution';
      poweredByDiv.innerHTML = 'Powered by ';
      poweredByDiv.appendChild(newAnchor);
    }
  } else {
    console.error('n8nChat not available.');
  }
});
