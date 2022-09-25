import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Routes/Home";
import { TopRated } from "./Components/Routes/TopRated";
import { Popular } from "./Components/Routes/Popular";
import { Upcoming } from "./Components/Routes/Upcoming";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
