import { Configuration, OpenAIApi } from "openai";
// import axios from "axios"
import './App.css'

// Set the User-Agent header globally for Axios
// console.log(import.meta.env.VITE_OPENAI_API_KEY)
const configuration = new Configuration({
  // organization: "org-KpXswoSTFjlOOuA6nrewrYrm",
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  
});
const openai = new OpenAIApi(configuration);

function App() {

//removing the "User-Agent header from the Configuration"
// delete configuration.baseOptions.headers['User-Agent'];

// Add the Authorization header
// configuration.baseOptions.headers['Authorization'] = `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`;
// console.log(configuration.baseOptions.headers)
 
  
  // const generateImage = async ()=>{
  //   const response = await openai.createImage({
     
  //     prompt: "Say this is a test",
  //     n:1,
  //     size:'1024x1024'
      
  //   });
  //   const image_url = response['data'][0]['url'];
  //   console.log(image_url)
  // }
    async function fetchData(){
      try{
        const response = await openai.createImage({
          prompt: "Say this is a test",
              n:1,
              size:'512x512', 
        })
        console.log(response.data.data[0].url)
      }
      catch(e){
        console.log(e)
      }
    }



 
  return ( 
    <>
    <button onClick={fetchData}>Generate images</button>
    </>
  )
}

export default App
