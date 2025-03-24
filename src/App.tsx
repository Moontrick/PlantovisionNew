import { Provider } from 'react-redux';
import { store } from './store';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/" element={<Navigate to='/home' />} />
              <Route path='/home' element={<HomePage />} />
            </Routes>
          </Router>
    </Provider>
  );
}

export default App;
