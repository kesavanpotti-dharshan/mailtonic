import { useState } from 'react';
import './App.css';

export default function App() {
    const [input, setInput] = useState("");
    const [tone, setTone] = useState("Professional");
    const [output, setOutput] = useState("");

    const handleEnhance = () => {
        // Dummy logic for now
        setOutput(`🔍 Enhancing email in "${tone}" tone...\n\n${input}`);
    };

    return (
        <div className="min-h-screen text-gray-800 p-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl p-8">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
                    ✨ MailTonic – AI Email Enhancer
                </h1>

                <textarea
                    className="w-full h-40 p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6 text-gray-700 placeholder-gray-400"
                    placeholder="Paste your email here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <select
                        className="w-full sm:w-auto p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <option value="Professional">Professional</option>
                        <option value="Friendly">Friendly</option>
                        <option value="Concise">Concise</option>
                        <option value="Persuasive">Persuasive</option>
                        <option value="Apologetic">Apologetic</option>
                    </select>

                    <button
                        className="bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                        onClick={handleEnhance}
                    >
                        Enhance Email
                    </button>
                </div>

                {output && (
                    <div className="mt-8 bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-sm whitespace-pre-line">
                        <h2 className="font-semibold text-xl mb-4 text-gray-800">Enhanced Email:</h2>
                        <p className="text-gray-700">{output}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
