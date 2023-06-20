import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Knowledge from './components/Knowledge/Knowledge';
import Profile from './Pages/Profile';
import AddTraining from './Pages/AddTraining';
import Heading from './components/heading/Heading';
import Nav from './components/navigation/Nav';
import Activity from './Pages/Activity';
function App() {
  return (
   
   <BrowserRouter>
    <div className="App">
      <Heading/>
      <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Activity" element={<Activity/>}/>
        <Route path="/Training" element={<AddTraining/>}/>
        <Route path="/Knowledge" element={<Knowledge/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </div>
      <Nav/>

    </div>
     </BrowserRouter>  
    );
}

export default App;
