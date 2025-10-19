// src/components/DeviceSelector.jsx
import React, { useState } from "react";

export default function DeviceSelector({ devices, setDevices, selectedDevices, setSelectedDevices }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const allDeviceOptions = [
    "iPhone 11",
    "iPhone 14",
    "iPhone 17",
    "iPad",
    "MacBook",
    "Android",
    "Samsung Tablet",
  ];

  const toggleDevice = (device) => {
    setSelectedDevices((prev) => 
        prev.includes(device)
        ? prev.filter((d) => d !== device)
        : [...prev, device]
    );
  };

  const addDevice = (device) => {
    if (!devices.includes(device)) {
      setDevices([...devices, device]);
    }
      setShowAddDevice(false);
    
  };

  const availableToAdd = allDeviceOptions.filter((d) => !devices.includes(d));

  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 mb-6 w-full max-w-lg">
      <h3 className="text-md font-semibold mb-3 text-gray-800">Choose Device</h3>

      <div className="flex flex-wrap gap-3 relative">
        {/* Device buttons */}
        {devices.map((device) => (
          <button
            key={device}
            onClick={() => toggleDevice(device)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedDevices.includes(device)
                ? "bg-pink-300 text-white border-pink-400"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
            }`}
          >
            {device}
          </button>
        ))}

        {/* Add (+) button */}
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="px-4 py-2 rounded-lg border border-dashed border-gray-400 text-gray-500 hover:bg-gray-100"
        >
          +
        </button>

        {/* Dropdown list for extra devices */}
        {showDropdown && (
          <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-xl p-3 w-48 z-10">
            {availableToAdd.length > 0 ? (
              availableToAdd.map((device) => (
                <button
                  key={device}
                  onClick={() => addDevice(device)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-100 text-gray-700"
                >
                  {device}
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-sm px-2">All devices added</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
