
# Detecting Emotional Tone of Text

This project utilizes IBM's Natural Language Understanding API to detect the emotional tone of given text. The application analyzes input text and provides feedback on the emotional tone detected in 5 categories: sadness, joy, fear, disgust, anger and 3 overall results: positive, neutral, negative. It is built as a React web application, leveraging the capabilities of IBM's AI for accurate emotion and sentiment analysis.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Getting Started

These instructions will help you set up the project locally and get it running on your machine.

### Prerequisites

- **Node.js**: Ensure Node.js (v14 or later) is installed.
- **IBM Natural Language Understanding API Key and URL**: You'll need an API key and URL to access IBM's Natural Language Understanding services.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bfilipiuk/Detecting-Emotional-Tone-of-Text.git
   cd emotional-tone-detector
   ```

2. **Install dependencies for client and server side**:
   ```bash
   cd client
   # in client directory
   npm install
   cd ..

   # in server directory
   cd server
   npm install
   ```

3. **Set up API variables**:

   Create `apikey.txt` and `apiurl.txt` in server directory. Both files should contain ONLY relevant variables. For example apikey.txt content should look like:

   ```bash
   abWMDH1237daJXKM123
   ```

## Usage

1. **Start the development server for client and server side**:
   ```bash
   # in client directory
   npm start

   # in server directory
   node server.js
   ```
   Now client server should work on port 3000 and backend server on ort 5000.

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Enter any text you would like to analyze in the input field, and press "Detect Emotions" button. The application will send the text to IBM's Natural Language Understanding API, which will return the detected emotional tone. **In case of any errors, make sure that your text is in English and long enough.**

## Features

- Detects and displays emotions such as joy, anger, sadness, disgust, and fear.
- User-friendly interface for entering text and viewing results.
- Real-time analysis powered by IBM's advanced AI models.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **IBM Watson Natural Language Understanding**: For emotional tone and sentiment analysis.
- **Node.js and Express**: Backend API to handle requests and communicate with IBM's API (if applicable).