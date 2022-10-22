import Counter from "../counter/counter";
import MainPage from '../../pages/main-page/main-page';
import SettingsPage from "../../pages/settings-page/settings-page";
import InfoPage from "../../pages/info-page/info-page";

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from "../../consts/consts";

const App = ():JSX.Element => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage/>}>
          <Route index element={<Counter/>} />
          <Route path={AppRoute.ROOT_SETTINGS} element={<SettingsPage/>}/>
          <Route path={AppRoute.ROOT_INFO} element={<InfoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
