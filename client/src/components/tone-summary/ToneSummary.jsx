import * as React from 'react';
import './styles.css';

const ToneSummary = ({analysis, emotionalTone}) => {
  return (
    <div>
    <p className='emotions-scores'>Emotion Scores:</p>
    <ul className='scores-list'>
        {Object.entries(analysis.emotion.document.emotion).map(
        ([emotion, score]) => (
            <li key={emotion}>
            {emotion}: {score}
            </li>
        )
        )}
    </ul>
    <p className={`${emotionalTone}-tone`}>
        Emotional tone: {emotionalTone}
    </p>
    </div>
  );
};

export { ToneSummary };
