import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';

import Registor from './Registor';

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Registor" element={<Registor />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
