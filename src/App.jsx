import { useState } from 'react'
import PinterestInput from "./components/PinterestInput";
import DeviceSelector from "./components/DeviceSelector";
import Button from "./components/Button";
import StepsGuide from './components/StepsGuide';
import { allDeviceOptions } from "./data/devices";
import { generateVisionBoard } from './api/visionBoard';
import './App.css'
import './index.css'

function App() {
  const [link, setLink] = useState("");
  const [devices, setDevices] = useState(allDeviceOptions.slice(0, 4));
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [loading, setLoading] = useState(false); 

  const handleGenerate = async () => {
    if (!link || selectedDevices.length === 0) {
      alert("Please provide a board URL and select at least one device.");
      return;
    }
  
    setLoading(true);
    try {
      for (const deviceId of selectedDevices) {
        const url = await generateVisionBoard(deviceId, link);
  
        // Trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = `${deviceId}_vision_board.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
  
      alert("Vision boards generated successfully!");
    } catch (err) {
      console.log(err)
      alert("Failed to generate vision boards.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
   <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-pink-300">Manifest Your Next Chapter</h1>
      
      <PinterestInput link={link} setLink={setLink} />
      <DeviceSelector
        devices={devices}
        setDevices={setDevices}
        selectedDevices={selectedDevices}
        setSelectedDevices={setSelectedDevices}
      />
      <Button onGenerate={handleGenerate} />
      <StepsGuide/>
    </div>

  )
}

export default App
