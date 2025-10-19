// src/components/PinterestInput.jsx
import React from "react";

export default function PinterestInput({ link, setLink }) {
  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 mb-6 w-full max-w-lg">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Pinterest Board Link
      </label>
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="https://www.pinterest.com/your-board/"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
      />
    </div>
  );
}
