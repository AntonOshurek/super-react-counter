import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { setAmountAction, toggleLimitAction, setLimitValueAction } from '../../store/actions/actions';

import ToMainPageLink from '../../components/to-main-page-link/to-main-page-link';

import './settings-page.scss';

const SettingsPage = ():JSX.Element => {
  const amount = useAppSelector(state => state.amount);
  const limit = useAppSelector(state => state.limit);
  const limitAmount = useAppSelector(state => state.limitValue);

  const dispatch = useAppDispatch();

  const onAmountInputChange = (evt: ChangeEvent<HTMLInputElement>):void => {
    const newAmount = Math.floor(+evt.target.value);
    dispatch(setAmountAction(newAmount));
  }

  const onLimitCheckboxchange = ():void => {
    const newLimitBoolean = !limit;
    dispatch(toggleLimitAction(newLimitBoolean));
  }

  const onLimitInputChange = (evt: ChangeEvent<HTMLInputElement>):void => {
    const newLimitValue = Math.floor(+evt.target.value);
    dispatch(setLimitValueAction(newLimitValue));
  }

  return(
    <section className="setiings container">
      <h2 className="settings__title">Settings</h2>

      <fieldset className='settings__set'>
        <label
          className={Math.sign(amount) === -1 ? 'settings__label unselectable settings__label--negative-value' : 'settings__label unselectable'}
        >
          Set count =
          <input className='settings__input' type="number" min={1} onChange={onAmountInputChange} value={amount === 0 ? '' : amount}/>
        </label>
      </fieldset>

      <fieldset className='settings__set'>
        <label className='settings__label unselectable'>
          Limits Off / On
          <div className='custom-checkbox'>
            <input className='custom-checkbox__input'
              type="checkbox" id="switch" aria-label='Limits Off / On'
              checked={limit}
              onChange={onLimitCheckboxchange}
            />
            <span className='custom-checkbox__toogler'></span>
          </div>
        </label>
        <label
          className={Math.sign(limitAmount) === -1 ? 'settings__label unselectable settings__label--negative-value' : 'settings__label unselectable'}
          >
          Maximum =
          <input
            className='settings__input'
            type="number"
            onChange={onLimitInputChange}
            value={limitAmount === 0 ? '' : limitAmount}/>
        </label>
      </fieldset>

      <ToMainPageLink/>
    </section>
  )
}

export default SettingsPage;
