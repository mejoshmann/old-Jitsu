import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Knowledge from './components/Knowledge/Knowledge';
import Profile from './Pages/Profile';
import AddTraining from './Pages/AddTraining';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Training" element={<AddTraining/>}/>
        <Route path="/Knowledge" element={<Knowledge/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    
    </div>
     </BrowserRouter>  
    );
}

export default App;
