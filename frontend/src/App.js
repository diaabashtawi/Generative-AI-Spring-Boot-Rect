import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar";
import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
        <TabComponent/>
    </div>
  );
}

export default App;
