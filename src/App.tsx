import './App.css';
import Accordion from './components/Accordion';
import { accordionItems } from './data';

const App = () => {
  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;



