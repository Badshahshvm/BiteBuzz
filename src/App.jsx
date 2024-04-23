import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Error from "./Component/Error";
import { BrowserRouter } from "react-router-dom";
import Success from "./Component/Success";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sucess" element={<Success />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
