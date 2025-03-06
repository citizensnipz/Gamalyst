import app from "./server.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5050;


console.log("✅ Index.js is running. Attempting to start server...");

app.listen(PORT, () => {
    console.log(`🔥 Server is running on http://localhost:${PORT}`);
    
  });