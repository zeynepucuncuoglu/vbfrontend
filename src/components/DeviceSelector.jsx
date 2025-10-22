import React, { useState } from "react";
import { allDeviceOptions } from "../data/devices";
import { generateVisionBoard } from "../api/visionBoard";

export default function DeviceSelector({
  devices,
  setDevices,
  selectedDevices,
  setSelectedDevices,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle device selection by ID
  const toggleDevice = (deviceId) => {
    setSelectedDevices((prev) =>
      prev.includes(deviceId)
        ? prev.filter((id) => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  // Add a new device from the dropdown
  const addDevice = (deviceId) => {
    const newDevice = allDeviceOptions.find((d) => d.id === deviceId);
    if (newDevice && !devices.some((d) => d.id === deviceId)) {
      setDevices([...devices, newDevice]);
    }
    setShowDropdown(false);
  };

  // Devices not yet added
  const availableToAdd = allDeviceOptions.filter(
    (d) => !devices.some((dev) => dev.id === d.id)
  );

  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 mb-6 w-full max-w-lg">
      <h3 className="text-md font-semibold mb-3 text-gray-800">Choose Device</h3>

      <div className="flex flex-wrap gap-3 relative">
        {/* Device buttons */}
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => toggleDevice(device.id)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedDevices.includes(device.id)
                ? "bg-pink-300 text-white border-pink-400"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
            }`}
          >
            {device.name}
          </button>
        ))}

        {/* Add (+) button */}
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="px-4 py-2 rounded-lg border border-dashed border-gray-400 text-gray-500 hover:bg-gray-100"
        >
          +
        </button>

        {/* Dropdown list */}
        {showDropdown && (
          <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-xl p-3 w-48 z-10 max-h-60 overflow-y-auto">
            {availableToAdd.length > 0 ? (
              availableToAdd.map((device) => (
                <button
                  key={device.id}
                  onClick={() => addDevice(device.id)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-100 text-gray-700"
                >
                  {device.name}
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
