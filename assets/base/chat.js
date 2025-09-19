// js.js — must be served with correct MIME and called as a module

import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://bot.roptive.com/webhook/f686bd4d-17ea-4a0b-be46-a868dd1e1ecd/chat',
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

document.addEventListener('DOMContentLoaded', function () {
  const poweredByDiv = document.querySelector('.chat-powered-by');
  if (poweredByDiv) {
    const newAnchor = document.createElement('a');
    newAnchor.href = 'https://roptive.com';
    newAnchor.textContent = 'Roptive Solution';
    poweredByDiv.innerHTML = 'Powered by ';
    poweredByDiv.appendChild(newAnchor);
  }
});
