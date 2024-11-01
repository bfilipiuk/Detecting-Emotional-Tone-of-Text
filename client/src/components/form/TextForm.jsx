import React, { useState } from 'react';
import './styles.css';

const TextForm = ({onSubmit}) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    onSubmit(text);
  }

  return (
    <div>
      <div className='input-wrapper'>
        <label className='input-label'>Text to analyze: </label>
        <textarea
          className='input-textarea'
          placeholder='Write your text here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className='btn'>
        Detect Emotions
      </button>
    </div>
  );
};

export { TextForm };
