import {Configuration ,OpenAIApi} from "openai";
import { useState } from "react";

const configuration = new Configuration({
  apiKey: "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",
});

const openai=new OpenAIApi(configuration);

function Index() {

  async function fetchData(){
    try {
      const response = await openai.createImage({
        prompt: "Lion with wings",
        n: 1,
        size: "512x512",
      })
      const recieved =await response.data.data[0].url;
      console.log(recieved);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1>Image Generation</h1>
      <button onClick={fetchData}>Generate Image</button>
    </div>
  )
}

export default Index

