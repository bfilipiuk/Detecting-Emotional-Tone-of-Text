import axios from 'axios';
import { BASE_URL } from './config';

const analyzeToneBasedOnEmotions = (emotions) => {
  const threshold = 0.4;

  if (emotions.joy >= threshold) {
    return 'positive';
  }

  if (
    emotions.sadness >= threshold ||
    emotions.anger >= threshold ||
    emotions.fear >= threshold ||
    emotions.disgust >= threshold
  ) {
    return 'negative';
  }

  return 'neutral';
};

const analyzeText = async (text) => {
  if (!text || typeof text !== 'string') {
    throw Error('Text has to be a string.');
  }
  try {
    const response = await axios.post(`${BASE_URL}/analyze`, {
      text,
    });
    return {
      analysis: response.data,
      tone: analyzeToneBasedOnEmotions(response.data.emotion.document.emotion),
    };
  } catch (error) {
    console.log(error);
    throw Error('Error analyzing text.');
  }
};

export { analyzeText };
