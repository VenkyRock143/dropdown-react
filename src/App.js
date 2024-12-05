
import './App.css';
import Dropdown from './component/dropdown';
function App() {

  // An array containing the options for the dropdown menu. These options are passed as a prop to the Dropdown component.
  const items = ["Yes", "Probably not"]; 

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
