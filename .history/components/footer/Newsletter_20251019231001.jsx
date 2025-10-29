"use client";

import { useState } from "react";

export default function Newsletter({ newsletter }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{newsletter.title}</h3>
      <p className="text-purple-300 text-sm">{newsletter.description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletter.placeholder}
          className="w-full px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
        >
          {newsletter.buttonText}
        </button>
      </form>
    </div>
  );
}