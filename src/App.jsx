import { BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./Components/Routes/AnimatedRoutes";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AnimatePresence>
  );
}

export default App;
