import { Configuration, OpenAIApi } from "openai";
import axios from "axios"
import './App.css'

// Set the User-Agent header globally for Axios
axios.defaults.headers.common["User-Agent"] = "Your User Agent";

function App() {
 console.log(import.meta.env.VITE_OPENAI_API_KEY)
  const configuration = new Configuration({
    organization: "org-KpXswoSTFjlOOuA6nrewrYrm",
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    
});

  const openai = new OpenAIApi(configuration);
  
  const generateImage = async ()=>{
    const response = await openai.createImage({
      file: '<base64-encoded-image-file>',
      // caption: 'Say this is a test', // Or use 'prompt' instead of 'caption' if appropriate
     
      prompt: "Say this is a test",
      n:1,
      size:'1024x1024'
      
    });
    const image_url = response['data'][0]['url'];
    console.log(image_url)
  }
  
 
  return ( 
    <>
    <button onClick={generateImage}>Generate images</button>
    </>
  )
}

export default App
