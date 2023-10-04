import React from "react";
import DrawClass from "./components/DrawClass";
import Menu from "./components/Menu";
import { configMenu } from "./configMenu";
import { CLASS_UML } from "./classUML";



function App() {
  return (
    <div>
        <header className="nav-menu">
          <DrawClass data= {CLASS_UML} />
        </header>
        <Menu data={configMenu} />
    </div>
  )
}

export default App;
