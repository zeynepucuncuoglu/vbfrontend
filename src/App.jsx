import { useState } from 'react'
import PinterestInput from "./components/PinterestInput";
import DeviceSelector from "./components/DeviceSelector";
import Button from "./components/Button";
import StepsGuide from './components/StepsGuide';
import { allDeviceOptions } from "./data/devices";
import './App.css'
import './index.css'

function App() {
  const [link, setLink] = useState("");
  const [devices, setDevices] = useState(allDeviceOptions.slice(0, 4));
  const [selectedDevices, setSelectedDevices] = useState([]);

  const handleGenerate = () => {
    console.log("Generating vision board for:", {
      link,
      selectedDevices,
    });
    // 🔥 Next step: send to backend API
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
