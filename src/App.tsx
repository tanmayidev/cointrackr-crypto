import Home from "./screens/Home";
import "../src/dist/styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./screens/Coin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cointrackr-crypto/" element={<Home />} />
        <Route path="/cointrackr-crypto/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
