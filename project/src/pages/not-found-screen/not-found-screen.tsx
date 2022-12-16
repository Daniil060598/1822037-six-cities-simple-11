import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import './style.css';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <section className="section-not-found">
          <h1>404 Not Found</h1>
          <Link to={AppRoute.Main}>Go to Main page</Link>
        </section>
      </div>
    </>
  );
}

export default NotFoundScreen;
