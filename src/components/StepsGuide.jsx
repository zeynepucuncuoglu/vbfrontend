// src/components/StepsGuide.jsx
import React from "react";
//import { motion } from "framer-motion"; // optional for subtle animation

const steps = [
  {
    title: "Step 1 – Add Your Pinterest Board",
    description:
      "Paste your Pinterest board URL. Make sure it contains the right number of images for the device(s) you’ll select.",
    icon: "📌",
  },
  {
    title: "Step 2 – Select Your Device(s)",
    description:
      "Choose which device(s) you want your vision board for: iPhone, MacBook, etc. Hover over each device to see the exact number of images required.",
    icon: "📱💻",
  },
  {
    title: "Step 3 – Check Your Image Count",
    description:
      "Your board must match the required number of images for each device. Missing images will leave empty spots, and extra images will be ignored.",
    icon: "⚠️✅ℹ️",
  },
  {
    title: "Step 4 – Generate Your Vision Board",
    description:
      "Click “Generate” to create your vision board. Watch your images magically arrange themselves on your selected devices.",
    icon: "✨",
  },
];

export default function StepsGuide() {
  return (
    <div className="bg-white/40 backdrop-blur-md shadow-md rounded-2xl p-6 mb-8 w-full mt-12 max-w-2xl">
      <h2 className="text-2xl font-bold text-pink-400 mb-6 text-center">
        Quick Setup Steps
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
          key={index}
          className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition"
        >
            <div className="text-3xl">{step.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
