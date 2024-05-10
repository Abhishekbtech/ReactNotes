import './App.css';
import Hello from './Component/1.Basic/1.HelloWord/Hello';
import CountApp from './Component/1.Basic/2.CountApp/CountApp';
import Studentlist from './Component/1.Basic/3.ListComponent/Studentlist';
import Conditional from './Component/1.Basic/4.ConditionalRendering/Conditional';
import MultipleState from './Component/1.Basic/5.MultipleState/MultipleState';
import SingleState from './Component/1.Basic/5.MultipleState/SingleState';
import BasicRef from './Component/10.UseRef/1.Basic/BasicRef';
import InputComponentForm from './Component/10.UseRef/2.Imp/InputComponentForm';
import ShowLatestValAndPrevVal from './Component/10.UseRef/2.Imp/ShowLatestValAndPrevVal';
import SimpleFormInputBoxComponent from './Component/10.UseRef/2.Imp/SimpleFormInputBoxComponent';
import UndoMessage from './Component/10.UseRef/2.Imp/UndoMessage';
import CounterReducer from './Component/11.UseReduce/CounterReducer';
import ParentPTC from './Component/2.Communication/1.ParentToChild/ParentPTC';
import ParentCTP from './Component/2.Communication/2.ChildToParent/ParentCTP';
import ParentS from './Component/2.Communication/3.Sibling/ParentS';
import KeysAndListProblem from './Component/3.KeysAndList/KeysAndListProblem';
import KeysAndListSouction from './Component/3.KeysAndList/KeysAndListSouction';
import HookUseEffect from './Component/5.HookUseEffect/HookUseEffect';
import DigitalClock from './Component/6.DigitalClock/DigitalClock';
import CounterClassComponent from './Component/7.ClassComponent/2.Counter/Count';
import ReactRouter from './Component/8.ReactRouting/ReactRouter';
import MainContext from './Component/9.ContextApi/1.Normal/Component/MainContext';
import CREDwithLo from './Component/9.ContextApi/3.CRED/CREDwithLo';

function App() {
  return (
    <div className="App">
      {/* <Hello/> */}
      {/* <CountApp/> */}
      {/* <Studentlist/> */}
      {/* <Conditional/> */}
      {/* <SingleState/> */}
      {/* <MultipleState/> */}
      {/* <ParentPTC/> */}
      {/* <ParentCTP/> */}
      {/* <ParentS/> */}
      {/* <KeysAndListProblem/> */}
      {/* <KeysAndListSouction/> */}
      {/* <HookUseEffect/> */}
      {/* <DigitalClock/> */}
      {/* <CounterClassComponent/> */}
      {/* <ReactRouter/> */}
      {/* <MainContext/> */}
      {/* <CREDwithLo/> */}
      {/* <BasicRef/> */}
      {/* <ShowLatestValAndPrevVal/> */}
      {/* <SimpleFormInputBoxComponent/> */}
      {/* <InputComponentForm/> */}
      {/* <UndoMessage/> */}
      <CounterReducer/>
    </div>
  );
}

export default App;
