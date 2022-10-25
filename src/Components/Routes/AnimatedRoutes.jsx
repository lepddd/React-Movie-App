import { Route, Routes, useLocation } from "react-router-dom";
import Id from "./Id";
import Search from "./Search";
import { Home } from "./Home";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { Teste } from "./Teste";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/top_rated" element={<TopRated />} />
      <Route path="/id" element={<Id />}>
        <Route path=":movieId" element={<Id />} />
      </Route>
      <Route path="/search" element={<Search />}>
        <Route path=":movieName" element={<Search />} />
      </Route>
      <Route path="/teste" element={<Teste />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
export default AnimatedRoutes;
