import logo from './logo.svg';
import './App.css';
import Card from  './component/Card';

function App() {
  return (
       <>
       <h1 className="text-3xl font-bold underline mb-4" > Talwind</h1>
       <Card username = "sonu" title = " visit me"/>
       <Card username = "ritik" title = "click me"/>
       </>
  )
}

export default App;
