import "./components/Styles/App.css"
import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <div className="main">
        <NavigationBar/>
        <Introduction/>
      </div>
    </div>
  );
}

export default App;
