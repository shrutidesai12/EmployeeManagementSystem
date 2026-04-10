import React, { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi 👋 I’m your HR Assistant. How can I help you today?",
        },
    ]);

    const getBotReply = (userMessage) => {
        const msg = userMessage.toLowerCase();

        if (msg.includes("upload")) {
            return "You can upload employee documents inside the selected folder section.";
        }
        if (msg.includes("imported")) {
            return "Imported Documents folder is used for bulk imported files.";
        }
        if (msg.includes("degree")) {
            return "Degrees & Certificates section stores employee education documents.";
        }
        if (msg.includes("identity")) {
            return "Identity folder contains PAN, Aadhaar, Passport or ID-related documents.";
        }
        if (msg.includes("settings")) {
            return "You can manage folder settings from the 3-dot menu on the right panel.";
        }
        if (msg.includes("confidential")) {
            return "Marking a folder confidential restricts access based on permissions.";
        }

        return "Sorry, I didn’t understand that. Please try asking about documents, folders, upload, permissions, or settings.";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            sender: "user",
            text: input,
        };

        const botMessage = {
            sender: "bot",
            text: getBotReply(input),
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#718FC2] text-white shadow-lg flex items-center justify-center  transition"
            >
                <Sparkles size={24} />
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-white border border-[#e6e8ef] rounded-[12px] shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#718FC2] text-white px-4 py-3 flex items-center justify-between">
                        <div>
                            <h3 className="text-[15px] font-semibold">HR Assistant</h3>
                            <p className="text-[12px] opacity-90">Ask me anything</p>
                        </div>

                        <button onClick={() => setIsOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8f9fc]">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    msg.sender === "user" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] px-4 py-2 rounded-[12px] text-[13px] leading-[18px] ${
                                        msg.sender === "user"
                                            ? "bg-[#718FC2] text-white"
                                            : "bg-white border border-[#e6e8ef] text-[#394150]"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="border-t border-[#e6e8ef] p-3 flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type your message..."
                            className="flex-1 h-[42px] px-3 border border-[#d9dee7] rounded-[8px] text-[13px] outline-none "
                        />

                        <button
                            onClick={handleSend}
                            className="h-[42px] w-[42px] rounded-[8px] bg-[#718fc2] text-white flex items-center justify-center  transition"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}