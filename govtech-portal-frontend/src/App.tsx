import { useState } from "react";
import { LoginRoutes } from "./util/Routes";
import { AppContext } from "./lib/ContextLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        {!isAuthenticated && <LoginRoutes />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
