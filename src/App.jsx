import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Routes/Home";
import { TopRated } from "./Components/Routes/TopRated";
import { Popular } from "./Components/Routes/Popular";
import { Upcoming } from "./Components/Routes/Upcoming";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top_rated" element={<TopRated/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
    </Routes>
  );
}

export default App;
