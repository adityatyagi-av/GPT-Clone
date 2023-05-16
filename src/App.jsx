// import { Configuration, OpenAIApi } from "openai";
// // import axios from "axios"
// import './App.css'

// // Set the User-Agent header globally for Axios


// function App() {
//  console.log(import.meta.env.VITE_OPENAI_API_KEY)
//   const configuration = new Configuration({
//     organization: "org-KpXswoSTFjlOOuA6nrewrYrm",
//     apiKey:import.meta.env.VITE_OPENAI_API_KEY,
    
// });
// //removing the "User-Agent header from the Configuration"
// // delete configuration.baseOptions.headers['User-Agent'];
//   const openai = new OpenAIApi(configuration);
  
//   const generateImage = async ()=>{
//     const response = await openai.createImage({
     
//       prompt: "Say this is a test",
//       n:1,
//       size:'1024x1024'
      
//     });
//     const image_url = response['data'][0]['url'];
//     console.log(image_url)
//   }
  
 
//   return ( 
//     <>
//     <button onClick={generateImage}>Generate images</button>
//     </>
//   )
// }

// export default App
