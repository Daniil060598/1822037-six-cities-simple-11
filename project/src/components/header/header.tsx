import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {pathname !== AppRoute.Login ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <>
                      <li className="header__nav-item user">
                        <div className="header__nav-profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        </div>
                      </li>
                      <li className="header__nav-item">
                        <Link
                          className="header__nav-link"
                          onClick={(evt) => {
                            evt.preventDefault();
                            dispatch(logoutAction());
                          }}
                          to='/'
                        >
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                    :
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                }
              </ul>
            </nav>
            : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
