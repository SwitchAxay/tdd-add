import React, { useState } from 'react';

const NumberSum = () => {
  const [numberString, setNumberString] = useState('');
  const [totalValue, setTotalValue] = useState('');

  const handleNumberSum = () => {

  };

  return (
    <div className="number-sum">
      <div className="number-sum-row">
        <div>Number String</div>
        <div>
          <input
            type="text"
            placeholder="Type number string"
            onChange={(e) => setNumberString(e.target.value)}
            value={numberString}
          />
        </div>
      </div>
      <div className="number-sum-btn">
        <button type="button" className="custom-button" onClick={handleNumberSum}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NumberSum;
