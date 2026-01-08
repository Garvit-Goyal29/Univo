import { useState } from "react";
import Sideb from "./components/Sideb";
import Home from "./components/Home";
import './App.css'
function App() {
  const [mp, setmp] = useState(<Home />);

  return (
    <div className="w-full min-h-screen flex">
      <Sideb setmp={setmp} />
      <div className="ml-[20%] w-[80%] min-h-screen">
        {mp}
      </div>
    </div>
  );
}

export default App;
