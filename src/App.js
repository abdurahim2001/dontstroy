
import './App.css';
import Header from './components/Header.jsx';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Machen from './components/Machen.jsx';
import Menu from './components/Menu.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Machen/>
      <Routes>
      <Route  path='/' element={<Header/>} />
      <Route  path='/menu' element={<Menu/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
