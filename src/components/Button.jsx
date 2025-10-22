// src/components/GenerateButton.jsx
import React from "react";
import { generateVisionBoard } from "../api/visionBoard";

export default function Button({ onGenerate }) {
  return (
    <button
      onClick={onGenerate}
      className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-xl text-lg shadow-md transition"
    >
      Generate Vision Board
    </button>
  );
}
