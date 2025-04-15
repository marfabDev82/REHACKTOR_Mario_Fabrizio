
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routes/Routing';
import './styles/style.css'
import SessionProvider from './context/SessionProvider';
import FavoritesProvider from './context/FavoritesProvider';

function App() {


  return (
    <SessionProvider>
      <FavoritesProvider>
        <Routing />
      </FavoritesProvider>
    </SessionProvider>

  );
}

export default App
