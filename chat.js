class ChatWidget {
    constructor() {
        this.widget = document.getElementById('aiChatWidget');
        this.toggleBtn = document.getElementById('toggleChatBtn');
        this.minimizeBtn = document.getElementById('minimizeChatBtn');
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendMessage');
        this.qaDatabase = new QuestionDatabase();
        this.isTyping = false;
        
        this.initialize();
    }

    initialize() {
        this.toggleBtn.addEventListener('click', () => {
            this.widget.classList.add('active');
            this.toggleBtn.classList.add('hidden');
        });

        this.minimizeBtn.addEventListener('click', () => {
            this.widget.classList.remove('active');
            this.toggleBtn.classList.remove('hidden');
        });

        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Disable input while AI is typing
        this.userInput.addEventListener('input', () => {
            this.sendButton.disabled = this.userInput.value.trim() === '' || this.isTyping;
        });
    }

    sendMessage() {
        const message = this.userInput.value.trim();
        if (message && !this.isTyping) {
            this.addMessage(message, 'user');
            this.userInput.value = '';
            this.userInput.disabled = true;
            this.sendButton.disabled = true;
            this.processAIResponse(message);
        }
    }

    addMessage(content, type, isTyping = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message ${isTyping ? 'typing' : ''}`;
        
        const avatar = document.createElement('div');
        avatar.className = type === 'ai' ? 'ai-avatar' : 'user-avatar';
        avatar.textContent = type === 'ai' ? 'AI' : 'You';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';

        if (type === 'user') {
            messageContent.textContent = content;
        } else {
            messageContent.innerHTML = content;
        }

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();

        return messageDiv;
    }

    async processAIResponse(userMessage) {
        this.isTyping = true;
        const typingIndicator = this.showTypingIndicator();
        
        try {
            const language = this.qaDatabase.detectLanguage(userMessage);
            const response = this.qaDatabase.findBestMatch(userMessage, language);
            
            // Split response into sentences for natural typing effect
            const sentences = this.splitIntoSentences(response);
            
            // Remove typing indicator
            this.removeTypingIndicator(typingIndicator);
            
            // Type out each sentence with a natural delay
            let messageDiv = null;
            for (let i = 0; i < sentences.length; i++) {
                if (i === 0) {
                    messageDiv = this.addMessage('', 'ai');
                }
                await this.typeMessage(sentences[i], messageDiv);
                
                if (i < sentences.length - 1) {
                    await this.delay(800); // Delay between sentences
                }
            }
        } catch (error) {
            console.error('Error processing AI response:', error);
            this.removeTypingIndicator(typingIndicator);
            this.addMessage('Sorry, I encountered an error. Please try again.', 'ai');
        } finally {
            this.isTyping = false;
            this.userInput.disabled = false;
            this.sendButton.disabled = false;
            this.userInput.focus();
        }
    }

    splitIntoSentences(text) {
        // Split text into sentences while preserving list formatting
        return text.split(/([.!?]\s+)/)
            .reduce((acc, current, i, arr) => {
                if (i % 2 === 0) {
                    const nextPunct = arr[i + 1] || '';
                    acc.push(current + nextPunct);
                }
                return acc;
            }, [])
            .filter(sentence => sentence.trim() !== '');
    }

    async typeMessage(text, messageDiv) {
        const messageContent = messageDiv.querySelector('.message-content');
        const words = text.split(' ');
        let currentText = messageContent.innerHTML;

        for (const word of words) {
            currentText += (currentText ? ' ' : '') + word;
            messageContent.innerHTML = currentText;
            this.scrollToBottom();
            await this.delay(this.getRandomTypingDelay(word));
        }
    }

    getRandomTypingDelay(word) {
        // Vary typing speed based on word length and punctuation
        const baseDelay = 50;
        const variableDelay = Math.random() * 30;
        const punctuationDelay = word.match(/[.,!?]$/) ? 400 : 0;
        return baseDelay + variableDelay + punctuationDelay;
    }

    showTypingIndicator() {
        return this.addMessage('<span class="typing-dots">...</span>', 'ai', true);
    }

    removeTypingIndicator(typingIndicator) {
        if (typingIndicator && typingIndicator.parentNode) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize chat widget when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
}); 