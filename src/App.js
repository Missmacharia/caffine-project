
import "./App.css";
import Navbar from "./componenets/navbar/Navbar";
import Sidebar from "./componenets/sidebar/Sidebar";
import Service from "./routes/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className="contanier">
        <Sidebar />
        <Service />
      </div>
    </div>
  );
}

export default App;
