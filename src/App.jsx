import React from "react";

// routes
import Routing from "./routes/Routing";
import ProvidedRoutes from "./routes/ProvidedRoutes";

function App() {
  return (
    <>
      <ProvidedRoutes>
        <Routing />
      </ProvidedRoutes>
    </>
  )
}

export default App
