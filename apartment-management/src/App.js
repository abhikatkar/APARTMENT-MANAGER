import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Detail } from './Components/Detail/Detail';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      


      <Navbar/>

      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
 


    </div>
  );
}

export default App;
