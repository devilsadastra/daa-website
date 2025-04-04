"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:devils.adastra@gmail.com"
              className="text-blue-400 hover:underline text-xl"
            >
              devils.adastra@gmail.com
            </a>
            <a
              href="https://asu.campuslabs.com/engage/organization/devilsadastra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              Sun Devil Sync
            </a>
            <a
              href="https://instagram.com/adastradevils"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@devilsadastra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              YouTube
            </a>
            <a
              href="https://x.com/devilsadastra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/devils-ad-astra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/devilsadastra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="relative container mx-auto px-6 py-12">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-base font-medium text-gray-700 dark:text-gray-200"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="mt-1"
                rows="4"
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSending}
                className={`w-full transition-colors duration-300 ${
                  success ? "bg-green-600 hover:bg-green-700" : ""
                }`}
              >
                {success
                  ? "Message Sent!"
                  : isSending
                  ? "Sending..."
                  : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
