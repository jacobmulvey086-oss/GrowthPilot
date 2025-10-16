'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatbotProps {
  goal?: string;
  niche?: string;
}

export function AIChatbot({ goal, niche }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: goal && niche
        ? `Hi! I'm your PathFinder AI assistant helping you reach ${goal} with ${niche}. Ask me anything about your tasks! 🚀`
        : 'Hi! I\'m your PathFinder AI assistant. Ask me anything about your tasks or how to reach your income goals! 🚀',
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (): Promise<void> => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev: Message[]) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          goal: goal || undefined,
          niche: niche || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      setMessages((prev: Message[]) => [
        ...prev,
        { role: 'assistant', content: data.message },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Sorry, I\'m having trouble connecting.';
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: 'assistant',
          content: errorMessage.includes('OPENAI_API_KEY')
            ? '⚠️ The chatbot needs an OpenAI API key to work. Please add OPENAI_API_KEY to your environment variables.'
            : errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#1E66FF] hover:bg-[#1E66FF]/90 shadow-lg z-50"
          aria-label="Open AI assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-[#2A2A2A] border-[rgba(255,255,255,0.12)] shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.12)]">
            <div>
              <h3 className="font-semibold text-white">AI Assistant</h3>
              <p className="text-xs text-gray-400">
                {goal && niche ? `Helping with ${goal} · ${niche}` : 'Here to help with your tasks'}
              </p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-[#333333]"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message: Message, index: number) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-[#1E66FF] text-white'
                      : 'bg-[#1A1A1A] text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] text-white rounded-lg p-3">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-[rgba(255,255,255,0.12)]">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#1A1A1A] border-[rgba(255,255,255,0.12)] text-white"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-[#1E66FF] hover:bg-[#1E66FF]/90 text-white"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
