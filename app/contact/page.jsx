"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  FaEnvelope,
  FaUniversity,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        e.target.reset();
        setSuccess(true);

        // Reset button after 10 seconds
        setTimeout(() => {
          setIsSending(false);
          setSuccess(false);
        }, 10000);
      } else {
        setIsSending(false);
        alert("Message failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message", error);
      setIsSending(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20 bg-[url('/space-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-6 py-12 mt-10">
          <h2 className="text-6xl font-bold text-center text-white mb-4">
            Reach out to us
          </h2>
          <p className="text-xl text-center text-white mb-6">
            You can contact us via email or follow us on social media for
            updates and more information.
          </p>
          
          {/* Updated Social Icons */}
          <div className="flex justify-center items-center gap-8 md:gap-12 my-10">
            <div className="flex flex-col items-center group">
              <a
                href="mailto:devils.adastra@gmail.com"
                className="flex flex-col items-center"
                aria-label="Email"
              >
                <FaEnvelope className="text-5xl md:text-6xl text-white group-hover:text-[#D44638] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#D44638] transition-transform duration-300 group-hover:scale-110">Email</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <a
                href="https://asu.campuslabs.com/engage/organization/devilsadastra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="University"
              >
                <FaUniversity className="text-5xl md:text-6xl text-white group-hover:text-[#8C1D40] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#8C1D40] transition-transform duration-300 group-hover:scale-110">Sun Devil Sync</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <a
                href="https://instagram.com/adastradevils"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="Instagram"
              >
                <FaInstagram className="text-5xl md:text-6xl text-white group-hover:text-[#E1306C] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#E1306C] transition-transform duration-300 group-hover:scale-110">Instagram</span>
              </a>
            </div>

            <div className="flex flex-col items-center group">
              <a
                href="https://www.youtube.com/@devilsadastra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="YouTube"
              >
                <FaYoutube className="text-5xl md:text-6xl text-white group-hover:text-[#FF0000] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#FF0000] transition-transform duration-300 group-hover:scale-110">YouTube</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <a
                href="https://x.com/devilsadastra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="Twitter/X"
              >
                <FaTwitter className="text-5xl md:text-6xl text-white group-hover:text-[#1DA1F2] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#1DA1F2] transition-transform duration-300 group-hover:scale-110">X</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <a
                href="https://www.linkedin.com/in/devils-ad-astra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-5xl md:text-6xl text-white group-hover:text-[#0077B5] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#0077B5] transition-transform duration-300 group-hover:scale-110">LinkedIn</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <a
                href="https://github.com/devilsadastra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                aria-label="GitHub"
              >
                <FaGithub className="text-5xl md:text-6xl text-white group-hover:text-[#333333] transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-2 text-white text-m font-bold group-hover:text-[#333333] transition-transform duration-300 group-hover:scale-110">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-6 py-12">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 dark:bg-gray-900/40 p-10 rounded-2xl shadow-2xl space-y-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">Send us a message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-300"
                >
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-900/70 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-300"
                >
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-900/70 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-blue-300"
              >
                Subject
              </label>
              <div className="relative">
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-900/70 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-300"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full bg-gray-900/70 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-lg text-white placeholder-gray-400 transition-all duration-300 resize-none"
                required
              />
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-lg text-white font-medium text-base shadow-lg transition-all duration-300 ${
                  success 
                    ? "bg-green-600 hover:bg-green-700 shadow-green-500/30" 
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
                }`}
              >
                {success
                  ? "Message Sent! ✓"
                  : isSending
                  ? "Sending..."
                  : "Submit Message"}
              </Button>
            </div>
            
            {success && (
              <div className="text-center text-green-400 mt-4 animate-pulse">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}