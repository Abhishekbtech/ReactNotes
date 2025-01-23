import './App.css';
import HelloClassComponent from './Component/1.Basic/1.HelloWord/Class';
import Hello from './Component/1.Basic/1.HelloWord/Hello';
import CountApp from './Component/1.Basic/2.CountApp/CountApp';

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloClassComponent/>
      <CountApp/>
    </div>
  );
}

export default App;
