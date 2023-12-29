import Home from "./components/home";
import Dataprovider from "./context/Dataprovider";

function App() {
  return (
    <Dataprovider>
      <Home />
    </Dataprovider>
  );
}

export default App;
