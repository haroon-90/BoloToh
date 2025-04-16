import { useState } from 'react';
import React from 'react'

const adviceform = () => {
    const apiKey = "AIzaSyAxuab6K_703XmpSqd4L_4tJggKALKB24c";

    async function run(type) {
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
                              - reply as you are directly advicing the user.`
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
            document.getElementById("poemhere").innerText = data.candidates[0].content.parts[0].text;
            console.log(data.candidates[0].content.parts[0].text)
        } else {
            document.getElementById("poemhere").innerText = "Error: Unexpected response format.";
        }
    }

    const [formData, setFormData] = useState({
        topic: '',
        currentfeeling: '',
        language: '',
        tone: '',
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
    };

    return (
        <div className="flex min-h-[calc(100vh-152px)] mx-10 my-3 gap-2">
            <div className="flex min-h-[calc(100vh-152px)]">
                <div className="glow max-w-3xl mx-auto p-6 h-auto bg-white rounded-4xl border-2 border-[#0044ff]">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Tell Us abaout Yourself</h2>
                    <p className="text-md mb-4 text-center text-gray-500">Craft personalized AI advice with a touch of AI magic!</p>

                    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="topic"
                                placeholder="Topic"
                                value={formData.topic}
                                onChange={handleChange}
                            // required
                            />
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="currentfeeling"
                                placeholder="Current Feeling"
                                value={formData.currentfeeling}
                                onChange={handleChange}
                            // required
                            />
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="language"
                                placeholder="language"
                                value={formData.language}
                                onChange={handleChange}
                            // required
                            />
                            <div className="flex flex-col flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus-within:border-[#0044ff]">
                                <label className="mb-1 text-gray-600 font-medium">Mood:</label>
                                <select
                                    name="tone"
                                    value={formData.tone}
                                    onChange={handleChange}
                                    className="input focus:outline-none"
                                >
                                    <option value="funny">Friendly</option>
                                    <option value="funny">Funny</option>
                                    <option value="roast">Roast</option>
                                    <option value="silly">Silly</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="shayarana">Shayarana</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-4'>
                            <button
                                type="submit"
                                onClick={() => { run("AI advice") }}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition mt-4"
                            >
                                Generate AI advice ✨
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='glow p-6 bg-white rounded-4xl border-2 border-[#0044ff] w-lg'>
                <article className='flex flex-col h-max justify-center'>
                    <pre
                        className='poem-container flex justify-center whitespace-pre-wrap break-words  flex-grow bg-gray-100 rounded-4xl p-4 mb-2 leading-10'
                        id='poemhere'
                    >
                        Waiting for your command, the AI stands ready to weave words into wonders.
                    </pre>
                    <div className="flex justify-center">
                        <h6 className='text-gray-500 text-sm'>
                            AI may produce unexpected or inaccurate results.
                        </h6>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default adviceform
