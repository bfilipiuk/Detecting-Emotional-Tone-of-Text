const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = fs.readFileSync('apikey.txt', 'utf-8').trim();
const URL = 'https://api.eu-de.natural-language-understanding.watson.cloud.ibm.com/instances/3fa0d7fa-644e-41e5-a71b-68ab6d37c35b';

app.post('/analyze', async (req, res) => {
    try {
        const response = await axios.post(
            `${URL}/v1/analyze?version=2021-08-01`,
            {
                text: req.body.text,
                features: {
                    emotion: {},
                    sentiment: {}
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        if ( 'error' in error.response.data && 'code' in error.response.data ) {
            res.status(500).send(error.response.data.error);
        } else {
            res.status(500).send('Error analyzing text');
        }
    }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));