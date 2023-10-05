import React from "react";
import DrawClass from "./components/DrawClass/DrawClass";
import Menu from "./components/Menu/Menu";
import { configMenu } from "./configMenu";
import { CLASS_UML } from "./classUML";



function App() {
  return (
    <div>
      <Menu data={configMenu} />
      <section className="Uml-section">
        <DrawClass data={CLASS_UML} />
      </section>

    </div>
  )
}

export default App;
