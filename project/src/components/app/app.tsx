import Main from '../../pages/main-screen/main-screen';


type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <Main placesCount = {placesCount}/>
  );
}

export default App;
