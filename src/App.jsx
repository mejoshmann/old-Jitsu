import './App.css';
import Nav from '../src/components/navigation/Nav';
import Main from '../src/components/main/Main';
import Heading from '../src/components/heading/Heading';
import Chart from './components/Chart/Chart';
import GiNoGi from './components/PieChart/Pie';
import Training from './components/Training/Training';

function App() {
  return (
    <div className="App">
      <Heading />
      <Training />
      {/* <Main /> */}
      {/* <GiNoGi/> */}
      {/* <Chart/> */}
      {/* <Nav /> */}
    
    </div>
  );
}

export default App;
