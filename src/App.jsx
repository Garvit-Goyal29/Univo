import { useState } from "react";
import Sideb from "./components/Sideb";
import Home from "./components/Home";
import ScrollProgress from "./components/ScrollProgramBar"; 
import './App.css'
function App() {
  const [mp, setmp] = useState(<Home />);
  const [mainL,setmainL] = useState();

  return (
    <>
      <div className="w-full min-h-screen flex">
        <Sideb setmp={setmp} />
        <div className="ml-[20%] w-[80%] min-h-screen">
          {mp}
        </div>
      </div>
    </>
  );
}

export default App;
