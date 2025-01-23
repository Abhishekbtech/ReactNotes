import './App.css';
import HelloClassComponent from './Component/1.Basic/1.HelloWord/Class';
import Hello from './Component/1.Basic/1.HelloWord/Hello';
import CountApp from './Component/1.Basic/2.CountApp/CountApp';
import Studentlist from './Component/1.Basic/3.ListComponent/Studentlist';
import Conditional from './Component/1.Basic/4.ConditionalRendering/Conditional';

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloClassComponent/>
      <CountApp/>
      <Studentlist/>
      <Conditional/>
    </div>
  );
}

export default App;