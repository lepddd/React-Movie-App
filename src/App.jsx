import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./Components/Routes/AnimatedRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        <Router>
          <AnimatedRoutes />
        </Router>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
