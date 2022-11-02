import { HashRouter, Routes, Route} from 'react-router-dom'; 
/*Using HasRouter because GitHub Pages does not support BrowserRouter technologies*/
import './App.css';
import MainView from './components/MainView/MainView';
import Login from './components/Login/Login'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainView/>}/>
        <Route path='/login' element={sessionStorage.getItem('token') ? <MainView/> : <Login/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
