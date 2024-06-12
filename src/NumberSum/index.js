import React, { useState } from 'react';
import handleNumberSum from './handleNumberSum';

const NumberSum = () => {
  const [numberString, setNumberString] = useState("//;\n8;6");
  const [totalValue, setTotalValue] = useState('');

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
        <button type="button" className="custom-button" onClick={() => handleNumberSum(numberString)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NumberSum;
