import logo from './logo.svg';
import './App.css';
import Header from './compoents/Header';
import Slide from './compoents/Slide';
import Cards from './compoents/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <div>
      <Cards/>
    </div>
      
    </div>
    
  );
}

export default App;
