require("dotenv").config();
const request = require('superagent');

const express = require("express");
const app = express();
const port = 4000;

const { Configuration, OpenAIApi, ChatCompletion} = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// adding body-parser and cors
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  try {
    const { message, files } = req.body;

    if (!message) {
      res.status(400).send('message required');
      return;
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          { "role": "user", "content": `${message}` }
        ]
      }
    };

    const response = await request.post('https://api.openai.com/v1/chat/completions').set(fetchOptions.headers).send(fetchOptions.data);
    console.log(response.body)
    const responseData =response.body

    console.log('response', responseData);
    console.log('message', responseData.choices[0]?.message);
    const botResponse = responseData.choices[0]?.message.content.trim();

    res.send({ botResponse: botResponse });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error generating MongoDB query');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
