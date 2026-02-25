"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Get In Touch
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="backdrop-blur-md rounded-2xl p-8 lg:p-12 border shadow-lg" style={{
          background: 'linear-gradient(to bottom right, var(--card-bg), var(--card-bg-hover))',
          borderColor: 'var(--border-color)'
        }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--foreground)'
                  }}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--foreground)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 resize-none"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--foreground)'
                }}
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-300">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-300">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-gradient-orange text-white font-bold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            Ready to <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Architect</strong> your next big idea? Let's <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Collaborate</strong> and build something <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Exceptional</strong> together.
          </p>
          <p className="text-sm mt-4" style={{ color: 'var(--foreground-tertiary)' }}>
            You can also reach me directly at:{" "}
            <a href="mailto:tauquir061@gmail.com" className="text-gradient-orange hover:text-orange-300 transition-colors">
              tauquir061@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
