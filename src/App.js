import { useSelector } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  const {theme} = useSelector(state => state.theme)
  
  return (
    <div className={`${theme==='white'?'':'bg-gray-800'}`}>
    <div className="app w-2/3 pt-12 mx-auto">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="main mt-12">
        <Main />
      </div>
    </div>
    </div>
  );
}

export default App;
