import './App.css';

import { store } from './Redux/store';
import {useSelector} from 'react-redux'
import { Home } from './Component/home';
import { Route, Routes } from 'react-router-dom';

import { Quiz } from './Component/Quiz';
import { Result } from './Component/result';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>

    </div>
  );
}

export default App;
