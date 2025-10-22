// src/api/visionBoard.js

export const generateVisionBoard = async (deviceId, boardUrl) => {
    try {
      const response = await fetch("http://localhost:8000/vision-board/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device: deviceId, board_url: boardUrl }),
      });
  
      if (!response.ok) throw new Error(`Backend returned ${response.status}`);
  
      // ✅ The backend returns an image file, not JSON
      const blob = await response.blob();
  
      // ✅ Create a URL for the image blob
      const imageUrl = URL.createObjectURL(blob);
  
      return imageUrl; // return it so the frontend can download it
    } catch (err) {
      console.error("Error generating board:", err);
      throw err;
    }
  };
  