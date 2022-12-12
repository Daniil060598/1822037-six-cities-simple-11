import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <section style={{ padding: 19 }}>
          <h1>404 Not Found</h1>
          <Link to={AppRoute.Main}>Go to Main page</Link>
        </section>
      </div>
    </>
  );
}

export default NotFoundScreen;
