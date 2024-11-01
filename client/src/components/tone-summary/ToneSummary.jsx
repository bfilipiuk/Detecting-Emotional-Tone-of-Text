import * as React from 'react';
import './styles.css';

const ToneSummary = ({analysis, emotionalTone}) => {
  return (
    <div>
    <p className='emotions-scores'>Emotion Scores:</p>
    <ul className='scores-list'>
      {Object.entries(analysis.emotion.document.emotion).map(
        ([emotion, score]) => (
            // <li key={emotion}>
            //   {emotion}: {(score * 100).toFixed(2)}%
            // </li>
          <li key={emotion} className="emotion-item">
            <span className="emotion-text">
              {emotion}: {(score * 100).toFixed(2)}%
            </span>
            <div className="bar-container">
              <div
                className="bar"
                style={{ width: `${(score * 100).toFixed(2)}%` }}
              ></div>
            </div>
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
