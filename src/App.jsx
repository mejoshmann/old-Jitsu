import './App.css';
import Nav from '../src/components/navigation/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/components/main/Main';
import Heading from '../src/components/heading/Heading';
import Chart from './components/Chart/Chart';
import GiNoGi from './components/PieChart/Pie';
import Training from './components/Training/Training';
import Iphone from './components/Iphone/Iphone';
import Home from './Pages/Home';
import Knowledge from './components/Knowledge/Knowledge';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Iphone/> */}
      
      {/* <Heading /> */}
      {/* <Training /> */}
      {/* <Main /> */}
      {/* <GiNoGi/> */}
      {/* <Chart/> */}
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Training" element={<Training/>}/>
        <Route path="/Knowledge" element={<Knowledge/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
