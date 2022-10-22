import { NavLink } from "react-router-dom";
import { AppRoute } from "../../consts/consts";

const ToMainPageLink = ():JSX.Element => {
  return(
    <NavLink to={AppRoute.ROOT} className='mainpage-link'>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path fill='#f8f8f8' d="M14.208 28.167 20 22.375l5.792 5.792 2.375-2.375L22.375 20l5.792-5.792-2.375-2.375L20 17.625l-5.792-5.792-2.375 2.375L17.625 20l-5.792 5.792ZM20 37.875q-3.708 0-6.979-1.375t-5.709-3.812Q4.875 30.25 3.5 26.979 2.125 23.708 2.125 20T3.5 13.021Q4.875 9.75 7.312 7.312q2.438-2.437 5.709-3.833Q16.292 2.083 20 2.083t6.979 1.396q3.271 1.396 5.709 3.833 2.437 2.438 3.833 5.709 1.396 3.271 1.396 6.979t-1.396 6.979q-1.396 3.271-3.833 5.709-2.438 2.437-5.709 3.812-3.271 1.375-6.979 1.375Z"/>
      </svg>
    </NavLink>
  )
}

export default ToMainPageLink;
