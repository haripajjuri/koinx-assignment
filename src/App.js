import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import TabsContainer from "./components/TabsContainer";

function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar/>
      </div>
      <div className="w-[94%] mx-auto ">
      <div className="grid grid-cols-[2.5fr,1.2fr]">

        <div>
          <Container />
          <TabsContainer />
        </div>

        <div>
          <Sidebar />
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
