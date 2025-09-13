import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, MapPin, Calendar, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  className?: string;
}

export const AIAssistant = ({ className }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content: "Namaste! I'm Shree, your personal travel assistant. I can help you find amazing destinations, plan itineraries, and provide local insights for your perfect Indian adventure! How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickSuggestions = [
    { icon: MapPin, text: "Best places in Kerala", category: "destination" },
    { icon: Calendar, text: "Plan 5-day Goa trip", category: "planning" },
    { icon: DollarSign, text: "Budget for Rajasthan tour", category: "budget" }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    // Simulate assistant response
    const assistantMessage: Message = {
      id: messages.length + 2,
      type: "assistant",
      content: "Thank you for your question! I'll help you with that. Please note that I'm currently in demo mode. Once the AI integration is complete, I'll provide personalized travel recommendations, real-time pricing, and detailed itineraries based on your preferences.",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInputMessage("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <div className={cn("fixed bottom-6 right-6 z-50", className)}>
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-disco-turquoise hover:bg-disco-turquoise/90 text-white shadow-lg animate-pulse"
        >
          <Bot className="w-6 h-6" />
        </Button>
        <div className="absolute -top-2 -left-20 bg-disco-turquoise text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
          Hi! I'm Shree 👋
        </div>
      </div>
    );
  }

  return (
    <div className={cn("fixed bottom-6 right-6 w-80 h-96 z-50", className)}>
      <Card className="h-full flex flex-col bg-white/95 backdrop-blur-md border-disco-turquoise/30 shadow-2xl">
        <CardHeader className="bg-disco-turquoise text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Shree</CardTitle>
                <p className="text-sm text-white/80">Travel Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              ✕
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.type === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg text-sm",
                    message.type === "user"
                      ? "bg-disco-turquoise text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === "assistant" && (
                      <Bot className="w-4 h-4 mt-0.5 text-disco-turquoise" />
                    )}
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
              <div className="space-y-1">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start h-8 text-xs border-disco-turquoise/30 hover:bg-disco-turquoise/10"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                  >
                    <suggestion.icon className="w-3 h-3 mr-2" />
                    {suggestion.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Shree about travel..."
                className="flex-1 border-disco-turquoise/30 focus:border-disco-turquoise"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-disco-turquoise hover:bg-disco-turquoise/90 text-white px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};