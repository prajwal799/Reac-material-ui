import logo from './logo.svg';
import './App.css';
import Grids from './component/Grids';
import Component from './component/Component';
import Appbar from './component/Appbar';


function App() {
  return (
    <div className="App">
      <Appbar />
      <br /><br /><br /><br />
      <Grids />
      <br /><br />
      <Component />
    </div>
  );
}

export default App;
