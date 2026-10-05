import { useState } from 'react';
import React from 'react'

const IntroduceForm = () => {
    const apiKey = "AIzaSyAxuab6K_703XmpSqd4L_4tJggKALKB24c";
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function run(type) {
        setIsLoading(true);
        const el = document.getElementById("poemhere");
        if (el) el.innerText = "✨ Generating your introduction... Please wait.";

        try {
            const url = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + apiKey;

            const requestBody = {
                contents: [{
                    parts: [{
                        text: `Create a creative and engaging ${type} for a person using the details from this object:
                                  ${JSON.stringify(formData)}
                                  Each key in the object represents a trait or property of the person, and its corresponding value should be used meaningfully in the ${type}.
                                  Additional rules:
                                  - The ${type} should be written in ${formData.language} language.
                                  - Do not include any explanation or translation.
                                  - If All detail are empty, then Just reply "Please Tell us about Yourself" in Different attractive ways.
                                  - reply as the user is introducing himself to someone.`
                    }]
                }]
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();
            console.log(data);

            if (data && data.candidates && data.candidates[0].content) {
                if (el) el.innerText = data.candidates[0].content.parts[0].text;
                console.log(data.candidates[0].content.parts[0].text);
            } else {
                if (el) el.innerText = "Error: Unexpected response format.";
            }
        } catch (error) {
            if (el) el.innerText = "Error: Failed to fetch response. Please try again.";
        } finally {
            setIsLoading(false);
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
        goal: '',
        language: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData));
        // run("poem");
    };

    const copyToClipboard = () => {
        const el = document.getElementById("poemhere");
        if (el && el.innerText) {
            navigator.clipboard.writeText(el.innerText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full my-4">
            {/* Input Form Column */}
            <div className="lg:col-span-7 bg-gray-900/60 border border-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm">👋</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Tell Us About Yourself</h2>
                    </div>
                    <p className="text-sm text-gray-400">Craft personalized introduction with a touch of AI magic!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Name</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="name"
                                placeholder="e.g. Sam"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Age</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="age"
                                placeholder="e.g. 26"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">City</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="city"
                                placeholder="e.g. Sydney"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Goal</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="goal"
                                placeholder="e.g. Lead engineering team"
                                value={formData.goal}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Language</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="language"
                                placeholder="e.g. English / Urdu"
                                value={formData.language}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5">City / Country (optional)</label>
                            <input
                                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                name="location"
                                placeholder="e.g. Australia"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            onClick={() => { run("Introduction paragraph") }}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                                    <span>Generating Introduction...</span>
                                </>
                            ) : (
                                <>
                                    <span>Generate Introduction ✨</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* AI Output Result Area */}
            <div className="lg:col-span-5 bg-gray-900/60 border border-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between min-h-[420px]">
                <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                            </span>
                            <h3 className="text-sm font-semibold text-gray-300">AI Introduction Output</h3>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/80 hover:bg-gray-700 hover:text-white rounded-lg border border-gray-700/60 transition cursor-pointer"
                        >
                            {copied ? '✓ Copied' : '📋 Copy Output'}
                        </button>
                    </div>

                    <div className="relative min-h-[250px] flex items-center justify-center p-4 bg-gray-950/60 border border-gray-800/80 rounded-2xl">
                        <pre
                            className="poem-container w-full text-center text-gray-200 text-base sm:text-lg whitespace-pre-wrap break-words leading-relaxed font-sans"
                            id="poemhere"
                        >
                            Waiting for your command, the AI stands ready to weave words into wonders.
                        </pre>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800/60 text-center">
                    <p className="text-xs text-gray-500">
                        ⚡ AI responses are dynamically generated and may vary.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IntroduceForm;
