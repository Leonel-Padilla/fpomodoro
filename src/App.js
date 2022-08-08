import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainView from './components/MainView/MainView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView></MainView>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
