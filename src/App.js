import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="w-[94%] mx-auto">
      <div className="grid grid-cols-[2.5fr,1.3fr]">
        <div>
        <div className="border-2 border-green-500 h-screen">hello</div>
        <div className="border-2 border-green-500 h-screen">hello</div>
        </div>

        <div className="sticky">
          <Sidebar />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
