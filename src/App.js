import './App.css';
import HelloClassComponent from './Component/1.Basic/1.HelloWord/Class';
import Hello from './Component/1.Basic/1.HelloWord/Hello';
import CountApp from './Component/1.Basic/2.CountApp/CountApp';
import Studentlist from './Component/1.Basic/3.ListComponent/Studentlist';
import Conditional from './Component/1.Basic/4.ConditionalRendering/Conditional';
import MultipleState from './Component/1.Basic/5.MultipleState/MultipleState';
import SingleState from './Component/1.Basic/5.MultipleState/SingleState';
import LocalStorage from './Component/1.Basic/6.DataStorage/LocalStorage';
import SessionStorage from './Component/1.Basic/6.DataStorage/SessionStorage';
import ParentPTC from './Component/2.Communication/1.ParentToChild/ParentPTC';
import ParentCTP from './Component/2.Communication/2.ChildToParent/ParentCTP';
import ParentS from './Component/2.Communication/3.Sibling/ParentS';
import KeysAndListProblem from './Component/3.KeysAndList/KeysAndListProblem';

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloClassComponent/>
      <CountApp/>
      <Studentlist/>
      <Conditional/>
      <MultipleState/>
      <SingleState/>
      <LocalStorage/>
      <SessionStorage/>


      <ParentPTC/>
      <ParentCTP/>
      <ParentS/>


      <KeysAndListProblem/>
    </div>
  );
}

export default App;