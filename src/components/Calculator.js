/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [newNumberStarting, setNewNumberStarting] = useState(true);

  const calculate = (a, b, operator) => {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case '+':
        return (a + b).toString();
      case '−':
        return (a - b).toString();
      case '×':
        return (a * b).toString();
      case '÷':
        return b === 0 ? 'Error' : (a / b).toString();
      default:
        return b.toString();
    }
  };

  const handleNumber = (num) => {
    if (display === 'Error') return;

    if (newNumberStarting) {
      setDisplay(num);
      setNewNumberStarting(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op) => {
    if (display === 'Error') return;

    if (previousValue && operator && !newNumberStarting) {
      const result = calculate(previousValue, display, operator);
      setDisplay(result);
      setPreviousValue(result);
    } else {
      setPreviousValue(display);
    }

    setOperator(op);
    setNewNumberStarting(true);
  };

  const handleEquals = () => {
    if (display === 'Error' || !operator || !previousValue) return;

    const result = calculate(previousValue, display, operator);
    setDisplay(result);
    setPreviousValue(null);
    setOperator(null);
    setNewNumberStarting(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setOperator(null);
    setPreviousValue(null);
    setNewNumberStarting(true);
  };

  const handleBackspace = () => {
    if (display === 'Error') return;
    setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear} className="button clear">
          C
        </button>
        <button onClick={handleBackspace} className="button">
          ←
        </button>
        <button onClick={() => handleOperator('÷')} className="button operator">
          ÷
        </button>

        <button onClick={() => handleNumber('7')} className="button">
          7
        </button>
        <button onClick={() => handleNumber('8')} className="button">
          8
        </button>
        <button onClick={() => handleNumber('9')} className="button">
          9
        </button>
        <button onClick={() => handleOperator('×')} className="button operator">
          ×
        </button>

        <button onClick={() => handleNumber('4')} className="button">
          4
        </button>
        <button onClick={() => handleNumber('5')} className="button">
          5
        </button>
        <button onClick={() => handleNumber('6')} className="button">
          6
        </button>
        <button onClick={() => handleOperator('−')} className="button operator">
          −
        </button>

        <button onClick={() => handleNumber('1')} className="button">
          1
        </button>
        <button onClick={() => handleNumber('2')} className="button">
          2
        </button>
        <button onClick={() => handleNumber('3')} className="button">
          3
        </button>
        <button onClick={() => handleOperator('+')} className="button operator">
          +
        </button>

        <button onClick={() => handleNumber('0')} className="button zero">
          0
        </button>
        <button onClick={() => handleNumber('.')} className="button">
          .
        </button>
        <button onClick={handleEquals} className="button equals">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
