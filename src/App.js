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
      <div>
        <Menu data={configMenu} />
      </div>
    </div>
  )
}

export default App;
