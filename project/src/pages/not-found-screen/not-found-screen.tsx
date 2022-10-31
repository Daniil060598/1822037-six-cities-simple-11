import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <section style={{ padding: 20 }}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Go to Main page</Link>
    </section>
  );
}

export default NotFoundScreen;
