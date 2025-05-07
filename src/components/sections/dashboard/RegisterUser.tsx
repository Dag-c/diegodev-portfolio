import { Link } from 'react-router-dom';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import React, { useState } from "react";
import { RevealOnScroll } from '../RevealOnScroll';

export function RegisterUser() {

    const roles = ['buyer', 'seller', 'admin'];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "buyer"
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("https://apiecommercedagc.ddns.net/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(`✅ ${data.message}\n🆔 User ID: ${data.user}`);
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: "buyer"
                });
            } else {
                const errorMsg = data?.message || "Unknown error";
                alert(`❌ ${data.error || "Error"}: ${errorMsg}`);
            }
        } catch (error) {
            alert("❌ Network Error: Unable to reach the server");
        }
    };

    return (
        <section
            id="register"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="w-[80vw] min-w-[300px] max-w-[700px] px-4">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
                        Register User
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Password"
                            />
                        </div>

                        <div className="w-full">
                        <Listbox value={formData.role} onChange={(value) => setFormData({ ...formData, role: value })}>
                        <div className="relative">
                            <ListboxButton className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white">
                            {formData.role}
                            </ListboxButton>
                            <ListboxOptions className="absolute mt-1 w-full bg-gray-800 text-white rounded shadow-lg z-10">
                            {roles.map((role) => (
                                <ListboxOption
                                key={role}
                                value={role}
                                className="cursor-pointer hover:bg-green-600 px-4 py-2"
                                >
                                {role}
                                </ListboxOption>
                            ))}
                            </ListboxOptions>
                        </div>
                        </Listbox>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                        >
                            Register
                        </button>
                        <Link to="/dashboard" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}