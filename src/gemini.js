
import axios from "axios"; 
import { prevUser } from "./context/UserContext"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"; 
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
export async function generateResponse() { 
  try { 
    // Build parts correctly 
    const parts = [ 
      { 
        text: prevUser.prompt, 
      }, 
    ]; 
    if (prevUser.data) { 
      parts.push({ 
        inline_data: { 
          mime_type: prevUser.mime_type, 
          data: prevUser.data, // MUST be pure Base64 
        }, 
      }); 
    } 
    const payload = { 
      contents: [ 
        { 
          parts, 
        }, 
      ], 
    }; 
    const response = await axios.post(API_URL, payload, { 
      headers: { 
        "Content-Type": "application/json", 
        "x-goog-api-key": GEMINI_API_KEY, 
      }, 
    }); 
    const apiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text 
      ?.replace(/\\(.?)\\*/g, "$1") 
      ?.trim(); 
    return apiResponse || "No response from Gemini"; 
  } catch (error) { 
    console.error( 
      "Error calling Gemini API:", 
      error.response?.data || error.message 
    ); 
    throw error; 
  } 
}
