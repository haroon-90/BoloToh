import React, { useState } from 'react';
import { Feather, Copy, Check, Loader2, Sparkles } from 'lucide-react';
import './components.css';

function PoemForm() {
    const apiKey = "AIzaSyAxuab6K_703XmpSqd4L_4tJggKALKB24c";
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isUrdu, setIsUrdu] = useState(false);

    async function run(type) {
        setIsLoading(true);
        const el = document.getElementById("poemhere");
        if (el) el.innerText = "Generating your personalized poem... Please wait.";

        try {
            const url = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + apiKey;

            const requestBody = {
                contents: [{
                    parts: [{
                        text: `Create a creative and engaging ${type} about a person using the details from this object:
                                ${JSON.stringify(formData)}
                                Each key in the object represents a trait or property of the person, and its corresponding value should be used meaningfully in the ${type}.
                                Additional rules:
                                - The ${type} should be written in ${formData.language} language.
                                - "fvt_color" represents the person's favorite color. Use it poetically.
                                - The ${type}'s tone and mood should reflect the "mood" property of the object (e.g., happy, sad, romantic, etc.).
                                - If "is_random" is true, generate a completely unexpected and humorous ${type} — it can be absurd or creatively illogical.
                                - if user skip any property, then skip it in the ${type} too.
                                - Do not include any explanation or translation.
                                - If All detail are empty, then Just reply "Please Tell us about Yourself" in Different attractive ways.`
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

            if (data && data.candidates && data.candidates[0].content) {
                const text = data.candidates[0].content.parts[0].text;
                if (el) el.innerText = text;
                setIsUrdu(/[\u0600-\u06FF]/.test(text));
            } else {
                if (el) el.innerText = "Error: Unexpected response format.";
                setIsUrdu(false);
            }
        } catch (error) {
            if (el) el.innerText = "Error: Failed to fetch response. Please try again.";
            setIsUrdu(false);
        } finally {
            setIsLoading(false);
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        fvt_color: '',
        fvt_animal: '',
        hobby: '',
        language: '',
        location: '',
        weirdThing: '',
        mood: 'funny',
        is_random: false,
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
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                            <Feather className="w-5 h-5" />
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Tell Us About Yourself</h2>
                    </div>
                    <p className="text-sm text-slate-500">Craft personalized poems with a touch of AI magic!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="name"
                                placeholder="e.g. Alex"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Age</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="age"
                                placeholder="e.g. 24"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Favorite Color</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="fvt_color"
                                placeholder="e.g. Emerald Green"
                                value={formData.fvt_color}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Hobby</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="hobby"
                                placeholder="e.g. Stargazing"
                                value={formData.hobby}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Language</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="language"
                                placeholder="e.g. English / Urdu"
                                value={formData.language}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Favorite Animal (optional)</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="fvt_animal"
                                placeholder="e.g. Snow Leopard"
                                value={formData.fvt_animal}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">City / Country (optional)</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="location"
                                placeholder="e.g. Tokyo"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">One Weird Thing</label>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                name="weirdThing"
                                placeholder="e.g. Puts hot sauce on popcorn"
                                value={formData.weirdThing}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Mood</label>
                            <select
                                name="mood"
                                value={formData.mood}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                            >
                                <option value="funny">Funny</option>
                                <option value="roast">Roast</option>
                                <option value="silly">Silly</option>
                                <option value="emotional">Emotional</option>
                                <option value="shayarana">Shayarana</option>
                            </select>
                        </div>

                        <div className="flex items-center sm:pt-6">
                            <label className="relative flex items-center gap-2.5 cursor-pointer select-none text-sm font-medium text-slate-700">
                                <input
                                    type="checkbox"
                                    name="is_random"
                                    checked={formData.is_random}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                                />
                                <span>Make it completely random?</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            onClick={() => { run("poem") }}
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Generating Poem...</span>
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    <span>Generate Poem</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* AI Output Result Area */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[460px]">
                <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                            </span>
                            <h3 className="text-sm font-semibold text-slate-800">AI Poem Output</h3>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-200 transition cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Copied</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy Output</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="relative min-h-[280px] flex items-center justify-center p-5 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <pre
                            className={`poem-container w-full text-slate-800 text-base sm:text-lg whitespace-pre-wrap break-words leading-relaxed ${
                                isUrdu ? 'font-urdu text-right' : 'font-sans text-center'
                            }`}
                            id="poemhere"
                            dir={isUrdu ? 'rtl' : 'ltr'}
                        >
                            Waiting for your command, the AI stands ready to weave words into wonders.
                        </pre>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400">
                        AI responses are dynamically generated and may vary.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PoemForm;
