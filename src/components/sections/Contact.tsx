import React, { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

export function Contact() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                e.target as HTMLFormElement, 
                import.meta.env.VITE_PUBLIC_KEY)
            .then((_result: EmailJSResponseStatus) =>{
                alert("Message Sent!");
                setFormData({name:"", email:"", message:""});
            })
            .catch(()=>alert("Oops! Something went wrong. Please try again."));
    };

  return (
    <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="w-[80vw] min-w-[300px] max-w-[700px] px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
                text-transparent"
                > 
                    Get in Touch
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div className="w-full">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formData.name} 
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                        />
                    </div>

                    <div className="w-full">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formData.email} 
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com..."
                        />
                    </div>

                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                            rows={5} 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your message..."
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </RevealOnScroll>
    </section>
  )
}
