import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { changeValueAction } from '../../store/actions/actions';

import './counter.scss';

const Counter = ():JSX.Element => {
  const currentValue = useAppSelector(state => state.value);
  const amount = useAppSelector(state => state.amount);
  const limitValue = useAppSelector(state => state.limitValue);
  const limit = useAppSelector(state => state.limit);

  const dispatch = useAppDispatch();

  const inc = ():void => {
    const newValue: number = Math.floor(currentValue + amount);
    if(Math.sign(amount) !== -1) {
      if(limit && limitValue !== 0 && currentValue >= limitValue && Math.sign(limitValue) !== -1) {

      } else {
        dispatch(changeValueAction(newValue));
      }
    }
  }

  const dec = ():void => {
    if(Math.sign(amount) !== -1) {
      const newValue: number = Math.floor(currentValue - amount);
      dispatch(changeValueAction(newValue));
    }
  }

  return(
    <section className="counter container">
      <div className='counter__result'>
        <span className='counter__amount'>{currentValue}</span>
        {Math.sign(amount) === -1 ?
          <span className='counter__error'>You cant enter negative value, check this in your applications settings.</span>
          : ''}
      </div>

      {
        limit && limitValue !== 0 ? <div className='counter__limit'>
          <p className='counter__limit-count'>{limitValue}</p>
          <p className='counter__limit-text'>{Math.sign(limitValue) === -1 ? 'you cant enter negative limit values' : 'Limit'}</p>
          </div> : ''
      }

      <div className='counter__controls'>
        <button className='counter__control-button unselectable' type='button' onClick={inc}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path fill='#f8f8f8' d="M21.75 38.75V26.3H9.25v-4.55h12.5V9.25h4.55v12.5h12.5v4.55H26.3v12.45Z"/>
          </svg>
        </button>
        <button className='counter__control-button unselectable' type='button' onClick={dec}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path fill='#f8f8f8' d="M9.25 26.3v-4.55h29.5v4.55Z"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Counter;
