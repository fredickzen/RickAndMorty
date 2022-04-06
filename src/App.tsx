import './App.css';
import { Provider } from 'react-redux';
import store from '@redux/store/store';
import GlobalRoutes from './routes/GlobalRoutes';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalRoutes />
    </Provider>
  );
}

export default App;
