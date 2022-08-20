import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainView from './components/MainView/MainView';
import Login from './components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView></MainView>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
