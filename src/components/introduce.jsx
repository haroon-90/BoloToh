import { useState } from 'react';
import React from 'react'

const introduceform = () => {
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
            document.getElementById("poemhere").innerText = data.candidates[0].content.parts[0].text;
            console.log(data.candidates[0].content.parts[0].text)
        } else {
            document.getElementById("poemhere").innerText = "Error: Unexpected response format.";
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

    return (
        <div className="min-h-[calc(100vh-152px)] px-4 py-3 gap-2 md:mx-10 flex flex-col md:flex-row">
            <div className="flex min-h-[calc(100vh-152px)]">
                <div className="glow max-w-3xl mx-auto p-6 h-auto bg-white rounded-4xl border-2 border-[#0044ff]">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Tell Us abaout Yourself</h2>
                    <p className="text-md mb-4 text-center text-gray-500">Craft personalized Introduction with a touch of AI magic!</p>

                    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            // required
                            />
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="age"
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleChange}
                            // required
                            />
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="city"
                                placeholder="city"
                                value={formData.city}
                                onChange={handleChange}
                            // required
                            />
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="goal"
                                placeholder="goal"
                                value={formData.goal}
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
                            <input
                                className="input flex-1 min-w-[200px] border-2 border-gray-300 rounded p-2 focus:border-[#0044ff] focus:outline-none"
                                name="location"
                                placeholder="City / Country (optional)"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-4'>
                            <button
                                type="submit"
                                onClick={() => { run("Introduction paragraph") }}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition mt-4"
                            >
                                Generate Introduction ✨
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='glow p-6 bg-white rounded-4xl border-2 border-[#0044ff] w-full md:w-lg'>
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

export default introduceform
