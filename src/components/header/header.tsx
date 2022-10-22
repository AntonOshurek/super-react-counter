import Navigation from '../navigation/navigation';

import './header.scss';

const Header = ():JSX.Element => {
  return(
    <header className='header container'>
      <h1 className='visually-hidden'>Super Counter!</h1>
      <Navigation/>
    </header>
  )
}

export default Header;
