
import axios from 'axios';

const OpenAi=()=> {

    const generateNewImage =async ()=>{
        const options = {
            method: 'POST',
            url: 'https://openai80.p.rapidapi.com/images/generations',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
            data: {
              prompt: 'A cute baby sea otter',
              n: 2,
              size: '1024x1024'
            }
          };

        const response = await axios.request(options);
        console.log(response.data);
       
    }

  
    

  return (
    <div>
      <button onClick={generateNewImage}>Generate new Image</button>
    </div>
  )
}

export default OpenAi