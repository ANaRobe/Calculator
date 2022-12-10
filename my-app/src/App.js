import React, { useReducer } from 'react';
import "./index" 
import DigitButton from './DigitButton';

export const ACTIONS ={
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CLEAR: 'clear',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
      ...state,
      currentOperand:`${state.currentOperand || ""}${payload.digit}`,
      }
  }

}

const App = () => {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
          <div className='current-operand'>{currentOperand}</div>
          </div>
            <button className='span-two'>AC</button>
            <button>DEL</button>
            <button>÷</button>
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <button>*</button>
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <button>+</button>
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <button>-</button>
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <button className='span-two'>=</button>
      </div>
      

  );
}

export default App;
