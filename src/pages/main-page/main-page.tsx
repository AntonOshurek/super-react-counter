import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header';

import './main-page.scss';

const MainPage = ():JSX.Element => {
  return(
    <div className="main-page">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainPage;
