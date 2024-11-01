import React, { useState, useEffect, useMemo } from 'react';
import './styles.css';
import { analyzeText } from '../../services/textAnalysis.service';
import { interpolateHexColors, getGradient } from '../../utils/colors.utils';
import { ToneSummary, TextForm } from '../../components';

const TONE_COLORS = {
  positive: '#1bee1b',
  neutral: '#2e8fff',
  negative: '#ff1a1a',
  default: 'blue',
};

const TextAnalyzer = () => {
  const [analysis, setAnalysis] = useState(null);
  const [emotionalTone, setEmotionalTone] = useState('default');
  const [oldEmotionalTone, setOldEmotionalTone] = useState('default');
  const [errorMessage, setErrorMessage] = useState(null);
  const ANIMAITON_STEPS = 30;

  const updateBGGradientColor = (color) => {
    const backgroundElement = document.getElementsByClassName(
      'background-gradient'
    )[0];
    if (backgroundElement) {
      const gradient = getGradient(color);
      backgroundElement.style.background = gradient;
      backgroundElement.style.background = gradient;
    }
  };

  useEffect(() => {
    let step = 0;

    const animateGradient = () => {
      if (step <= ANIMAITON_STEPS) {
        const [r1, g1, b1] = interpolateHexColors(
          TONE_COLORS[oldEmotionalTone],
          TONE_COLORS[emotionalTone],
          step / ANIMAITON_STEPS
        );
        console.log(step);
        updateBGGradientColor(`rgb(${r1}, ${g1}, ${b1})`);
        step++;
        requestAnimationFrame(animateGradient);
      } else {
        updateBGGradientColor(TONE_COLORS[emotionalTone] || 'blue');
      }
    };

    if (emotionalTone != oldEmotionalTone) {
      animateGradient();
    } else {
      updateBGGradientColor(TONE_COLORS[oldEmotionalTone] || 'blue');
    }
  }, [emotionalTone]);

  const handleSubmit = async (text) => {
    try {
      const { analysis, tone } = await analyzeText(text);
      setErrorMessage(null);
      setAnalysis(analysis);
      setOldEmotionalTone(emotionalTone);
      setEmotionalTone(tone);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(JSON.stringify(error));
      }
    }
  };

  return (
    <div className='text-analyzer'>
      <h1 className='header'>Detecting Emotional Tone of Text</h1>
      <div className='form-container'>
        <TextForm onSubmit={handleSubmit} />
      </div>
      <div className='results-container'>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {analysis && <ToneSummary analysis={analysis} emotionalTone={emotionalTone}/>}
      </div>
    </div>
  );
};

export { TextAnalyzer };
